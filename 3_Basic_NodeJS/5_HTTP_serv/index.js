const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res)=>{
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}:${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data)=>{
        switch(req.url){
            case '/':res.end("Home Page");
            break;
            case '/about': res.end("I am xitij.");
            break;
            default: res.end("404");
        }
    });
});

myServer.listen(3000, ()=>{
    console.log("Server Started..!");
})