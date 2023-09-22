const { readFile, writeFile } = require('fs')

//for async we need to provide a callback function

readFile('./nodejstutorial/current/first.txt','utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./nodejstutorial/current/second.txt','utf8', (err, result) => {
            if(err) {
                console.log(err)
                return
            }
            const second = result;
            writeFile('./nodejstutorial/current/result-async.txt',`here is the result: ${first}, ${second}`,(err,result) => {
                    if(err) {
                        console.log(err)
                        return
                    }
                        console.log(result)
                }
                )  
        })    
})


