import fs from 'fs';
import { getDirname } from '../utils.js';

const write = async () => {
    const __dirname = getDirname(import.meta.url);
    const filesPath = `${__dirname}/files/fileToWrite.txt`;

    try {
        const input = fs.createWriteStream(filesPath);
        process.stdin.on('data', (chunk) => {
            input.write(chunk)
        });
    } catch (err) {
        throw err;
    }
};

await write();