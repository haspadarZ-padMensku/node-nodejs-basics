import fs from 'fs/promises';
import { isExist, getDirname } from '../utils.js';

const copy = async () => {
    const __dirname = getDirname(import.meta.url);
    const filesPath = `${__dirname}/files`;
    const filesCopyPath = `${__dirname}/files_copy`;

    try {
        const isFilesExist = await isExist(filesPath);
        const isFilesCopyExist = await isExist(filesCopyPath);

        if (!isFilesExist || isFilesCopyExist) {
            throw new Error('FS operation failed');
        }

        await fs.cp(filesPath, filesCopyPath, { recursive: true });        
    } catch (err) {
        throw err;
    }
};

copy();