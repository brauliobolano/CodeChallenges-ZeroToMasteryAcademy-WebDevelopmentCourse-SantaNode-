const fs = require('fs');

console.time('santa-time'); // start the timer

const data = fs.readFileSync('santa.txt', 'utf8');
if(!data) return console.log('No data found');
let floor = 0;
for(i=0; i<(data.length); i++){
    if(data[i]==='('){
        floor++;
    } else if(data[i]===')'){
        floor--;
    };
    if (floor  === -1) {
        console.log('Santa entered the basement at position ' + (i+1));
        break;
    };
};
console.log(floor);
console.timeEnd('santa-time'); // end the timer and log the time
