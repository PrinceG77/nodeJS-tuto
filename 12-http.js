const http = require('http');

const httpServer = http.createServer((req, res) => {
    console.log(req);
    if(req.url === '/'){
    res.end('Welcome to my homepage dear friend ! ')
    }
    else if(req.url === '/about'){
    res.end('Here is our short story...')
    }

    else{
               res.end(`<h1>Error page<h1/>
               <p>This url doesn't exist !!!</p>
               <p>Please go back to <a href="/">the homepage</a></p>  `)
    }

    

})
httpServer.listen(5000)