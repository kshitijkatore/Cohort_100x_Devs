// const fs = require("fs")  dont doing this
/*
const express = require("express");
const port = 3000
const app = express();

app.get('/', (req, res)=>{

    res.send('Hello world !')
})

app.listen(port)
*/

/*
const express = require('express')
const app = express()

const port = 3000

app.get("/route-handler", (req, res)=>{
    // headers , body, query parametrs
    // do machine learning model
    res.json({
        name: "xitij",
        age: 20
    })
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})
*/

const express = require('express')
const app = express()


const port = process.env.PORT || 3000
app.use(express.json());

app.post('/backend-api/conversation', function(req, res){
    const message = req.query.message;

    res.json({
        output: "2 + 2 = 4"
    });

    res.send("Xitij")

})

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})