const fs1 = require('fs')
const first = fs1.readFileSync('./nodejstutorial/current/first.txt','utf8')
const second = fs1.readFileSync('./nodejstutorial/current/second.txt','utf8')
console.log(first,second)

//it wil create new file and overwrite the text from different file included
fs1.writeFileSync('./nodejstutorial/current/result-sync.txt',`here is the result: ${first} , ${second}`)


//destructed way
// const {readFileSync,writeFileSync} = require('fs')
// const first = fs1.readFileSync('./nodejstutorial/current/first.txt','utf8')
// const second = fs1.readFileSync('./nodejstutorialx/current/second.txt','utf8')
// writeFileSync('./nodejstutorial/current/result-sync.txt',`here is the result: ${first} , ${second}`)