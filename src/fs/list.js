import fs from 'fs/promises';
import { isExist, getDirname } from '../utils.js';

const list = async () => {
    const __dirname = getDirname(import.meta.url);
    const folderPath = `${__dirname}/files`;

    try {
        const isFolderExist = await isExist(folderPath);

        if (!isFolderExist) {
            throw new Error('FS operation failed');
        }

        const files = await fs.readdir(folderPath);
        console.log(files);
    } catch (err) {
        throw err;
    }
};

await list();