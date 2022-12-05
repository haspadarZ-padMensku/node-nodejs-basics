const parseArgs = () => {
    const res = process.argv
        .slice(2)
        .reduce((acc, value, index, arr) => {
            if (index%2 === 0) {
                const record = `${value.slice(2)} is ${arr[index + 1]}`;
                return acc ? `${acc}, ${record}` : `${record}`;
            }

            return acc;
        }, '');

        if (res) {
            console.log(res); 
        }
};

parseArgs();