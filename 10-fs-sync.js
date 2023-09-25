const {readFileSync, writeFileSync} = require('fs')


//--- read file ---
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(`1 : ${first} || 2 : ${second}`);

//--- write file ---
writeFileSync('./content/result-sync.txt', `${first} ::: ${second}`, {flag:'a'})