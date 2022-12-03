import fs from 'fs/promises';
import { isExist, getDirname } from '../utils.js';

const read = async () => {
    const __dirname = getDirname(import.meta.url);
    const filePath = `${__dirname}/files/fileToRead.txt`;

    try {
        const isFileExist = await isExist(filePath);

        if (!isFileExist) {
            throw new Error('FS operation failed');
        }

        const content = await fs.readFile(filePath, 'utf-8');
        console.log(content);
    } catch (err) {
        throw err;
    }
};

await read();