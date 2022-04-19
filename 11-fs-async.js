const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', 
        `The result is here: ${first}, ${second}`, 
        (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('done with this task');
        });
    });
});
console.log('starting next task');