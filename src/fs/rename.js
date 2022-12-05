import fs from 'fs/promises';
import { isExist, getDirname } from '../utils.js';

const rename = async () => {
    const __dirname = getDirname(import.meta.url);
    const wrongFilePath = `${__dirname}/files/wrongFilename.txt`;
    const properFilePath = `${__dirname}/files/properFilename.md`;

    try {
        const isWrongFileExist = await isExist(wrongFilePath);
        const isProperFileExist = await isExist(properFilePath);

        if (!isWrongFileExist || isProperFileExist) {
            throw new Error('FS operation failed');
        }

        await fs.rename(wrongFilePath, properFilePath);
    } catch (err) {
        throw err;
    }
};

await rename();