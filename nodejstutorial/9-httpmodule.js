const { write } = require('fs')
const http = require('http')

const server =http.createServer((req,res) =>{
    // res.write('welcom to our home-page')
    // res.end()
    // console.log(req)
    if(req.url === '/'){
        res.end('welcom to our home-page')
    }
    if(req.url === '/about'){
        res.end('here is about me in breif')
    }
    //default case 
    res.end(`
    <h1>OOPS!!</h1>
    <p>error found</p>
    <a href="/">back home</a>`)
})
server.listen(5000)