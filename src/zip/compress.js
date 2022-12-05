import fs from 'fs';
import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import { isExist, getDirname } from '../utils.js';

const compress = async () => {
    const __dirname = getDirname(import.meta.url);
    const filePath = `${__dirname}/files/fileToCompress.txt`;
    const compressedFilePath = `${__dirname}/files/archive.gz`;

    try {
        const isFileExist = await isExist(filePath);

        if (!isFileExist) {
            throw new Error('FS operation failed');
        }

        const source = fs.createReadStream(filePath);
        const destination = fs.createWriteStream(compressedFilePath);
        const gzip = zlib.createGzip();
        pipeline(source, gzip, destination);
    } catch (err) {
        throw err;
    }
};

await compress();