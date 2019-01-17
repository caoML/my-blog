const express = require('express')
const article = require('./data/article.js')
const app = express()
app.get('/article',(req,res)=>{
    res.send(JSON.stringify(article)+'')
})
app.listen(3000,()=>{
    console.log("server is running")
})
