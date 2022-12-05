const parseEnv = () => {
    const res = Object
        .entries(process.env)
        .filter(([key, _value]) => key.startsWith('RSS_'))
        .reduce((acc, [key, value]) => {
            const record = `${key}=${value}`;
            return acc ? `${acc}; ${record}` : `${record}`;
        }, '');
    
    if (res) {
        console.log(res); 
    }
};

parseEnv();