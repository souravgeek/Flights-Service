const {ServerConfig} = require("./config");
const express = require("express");
const apiRoutes= require("./routes");

const app= express();


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api', apiRoutes);
app.get('/new', ()=>{
    return res.json({
        "msg": "hi"
    })
})


app.listen(ServerConfig.PORT, ()=>{
    console.log("Successfully started the server at port ", ServerConfig.PORT); 
})
