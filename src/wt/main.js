import { Worker } from 'worker_threads';
import os from 'os';
import { getDirname } from '../utils.js';

const performCalculations = async () => {
    const __dirname = getDirname(import.meta.url);
    const filesPath = `${__dirname}/worker.js`;

    const cpus = os.cpus().length;

    let startNumber = 10;
    const result = {};
    let completedWorkers = 0;

    for (let i = 0; i < cpus; i++) {
        result[startNumber] = null;
        const worker = new Worker(filesPath, { workerData: startNumber });

        worker.on('message', ([number, res]) => {
            result[number] = {
                status: 'resolved',
                data: res,
            };
        });

        worker.on('error', (err) => {
            result[err.message] = {
                status: 'error',
                data: null,
            };
        });

        worker.on('exit', () => {
            completedWorkers++;
            if (completedWorkers === cpus) {
                console.log(Object.values(result));
            }
        });

        startNumber++; 
    }
};

await performCalculations();