//npm init -y
// npm i module name

const abc = require('lodash');
const items = [1,[2,[3,[4]]]] //array between another array
const newItems = abc.flattenDeep(items) //a property in lodash dependency
console.log(newItems) // returns a singe array having all elements