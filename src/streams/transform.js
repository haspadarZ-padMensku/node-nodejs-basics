import { Transform } from 'stream';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, _encoding, callback) {
            const input = String(chunk).split('');
            if (input[input.length - 1] === '\n') {
                input.pop();
            }
            input.reverse().push('\n');
            callback(null, input.join(''));
        },
    });

    try {
        reverse.on('data', (chunk) => {
            process.stdout.write(chunk);
        });

        process.stdin.pipe(reverse);
    } catch (err) {
        throw err;
    } 
};

await transform();