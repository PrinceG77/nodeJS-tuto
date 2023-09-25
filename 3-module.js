
// CommonJS, every file is module (by default)
// Modules - encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const altFlavor = require('./6-alternative-flavor')
require('./7-mind-grenade') //will print :  The sum of 12 and 25 is equal to 37
// console.log(altFlavor); // { items: [ 'item1', 'item2' ], singlePerson: { name: 'Christophe' } }

// console.log(names);


// sayHi('susan')
// sayHi(names.peter)
// sayHi(names.john)