import fs from 'fs';
import { getDirname } from '../utils.js';

const read = async () => {
    const __dirname = getDirname(import.meta.url);
    const filesPath = `${__dirname}/files/fileToRead.txt`;

    try {
        const input = fs.createReadStream(filesPath);
        input.on('readable', () => {
            const data = input.read();

            if (data) {
                process.stdout.write(data + "\n")
            }
        });
    } catch (err) {
        throw err;
    }
};

await read();