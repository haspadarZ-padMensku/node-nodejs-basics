import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    parentPort.postMessage([workerData, nthFibonacci(workerData)]);

    // Uncomment the code below to test error case
    // if (workerData === 12) {
    //     throw new Error(workerData);
    // }
};

sendResult();