const path = require('path')

console.log(path.sep)


const filePath = path.join('/star','string','half')
console.log(filePath)


//returns last path name entered above in filePath
const base = path.basename(filePath)
console.log(base)

//returns an absolute path
const absoulte = path.resolve(__dirname, 'star', 'string', 'half')
console.log(absoulte)