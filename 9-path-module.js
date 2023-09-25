const path = require('path')

// --- file separator ---
const fileSeparator = path.sep
console.log(fileSeparator);

// --- file path ---
const resultingPath = path.join('content/', 'subcontent', 'exemple.txt')
console.log(resultingPath);

//--- base name ---
const base = path.basename(resultingPath);
console.log(base);

//--- absolute path ---
const absolute = path.resolve(__dirname, 'content', 'subcontent', 'exemple.txt')
console.log(absolute);
