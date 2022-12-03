import fs from 'fs/promises';
import { isExist, getDirname } from '../utils.js';

const create = async () => {
    const __dirname = getDirname(import.meta.url);
    const filePath = `${__dirname}/files/fresh.txt`;

    try {
        const isFileExist = await isExist(filePath);

        if (isFileExist) {
            throw new Error('FS operation failed');
        }

        await fs.appendFile(filePath, 'I am fresh and young');
    } catch (err) {
        throw err;
    }
};

await create();