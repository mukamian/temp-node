const http=require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to home')
    }
    if(req.url==='/about'){
        res.end('Here is the history')
    }
    else{res.end(`
    <h1>Fuck you bitch</h1>
    <a href="/">Go back</a>
`)}
    
})

server.listen(5000)