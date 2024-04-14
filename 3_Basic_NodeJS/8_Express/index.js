// const http = require("http");
const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    return res.send("Hello from home page");
});

app.get("/about", (req, res)=>{
    return res.send(`Hey, ${req.query.name}`);
});

// Not write these in express In-built HTTP module in express

/*
const myServer = http.createServer(app);
myServer.listen(3000, ()=>{
    console.log("Server started");
});
*/


// Just write thse to create server
app.listen(3000, ()=>{
    console.log("Server Started..!");
})