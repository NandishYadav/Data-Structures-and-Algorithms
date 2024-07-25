const fs = require('fs');
const path = require('path');


const input  = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf-8').split('\n');


function part1() {
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += parseInt(input[i]);
    }
    return sum;
};



function main(){
    const ws = fs.createWriteStream(path.join(__dirname, 'output.txt'));
    const op = part1();
    ws.write(op + '\n');
    ws.end();
};

main();
