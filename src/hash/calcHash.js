import fs from 'fs';
import { createHash } from 'crypto';
import { getDirname } from '../utils.js';

const calculateHash = async () => {
    const hash = createHash('SHA256');
    const __dirname = getDirname(import.meta.url);
    const filesPath = `${__dirname}/files/fileToCalculateHashFor.txt`;

    try {
        const input = fs.createReadStream(filesPath);
        input.on('readable', () => {
            const data = input.read();
            if (data) {
                hash.update(data);
            } else {
                console.log(hash.digest('hex'));
            }
        }); 
    } catch (err) {
        throw err;
    }
};

await calculateHash();