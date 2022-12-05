import fs from 'fs/promises';
import { isExist, getDirname } from '../utils.js';

const remove = async () => {
    const __dirname = getDirname(import.meta.url);
    const filePath = `${__dirname}/files/fileToRemove.txt`;

    try {
        const isFileExist = await isExist(filePath);

        if (!isFileExist) {
            throw new Error('FS operation failed');
        }

        await fs.rm(filePath);
    } catch (err) {
        throw err;
    }
};

await remove();