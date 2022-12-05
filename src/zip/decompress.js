import fs from 'fs';
import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import { isExist, getDirname } from '../utils.js';

const decompress = async () => {
    const __dirname = getDirname(import.meta.url);
    const filePath = `${__dirname}/files/fileToCompress.txt`;
    const compressedFilePath = `${__dirname}/files/archive.gz`;

    try {
        const isFileExist = await isExist(compressedFilePath);

        if (!isFileExist) {
            throw new Error('FS operation failed');
        }

        const source = fs.createReadStream(compressedFilePath);
        const destination = fs.createWriteStream(filePath);
        const gzip = zlib.createGunzip();
        pipeline(source, gzip, destination);
    } catch (err) {
        throw err;
    }
};

await decompress();