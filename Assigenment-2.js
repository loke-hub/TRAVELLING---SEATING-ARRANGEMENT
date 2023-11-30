const input = [{ a: 1 }, { b: 2 }, { c: 3 }];

const output = input.reduce((result, obj) => {
    const key = Object.keys(obj)[0];
    const value = obj[key];
    result[key] = value;
    return result;
}, {});

console.log(output);
