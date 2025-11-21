const express=require('express')
const ip=require('ip')
const app=express();
app.listen('3000',()=>{
    console.log('server is listening on 3000')
})
app.get('/ping',(req,res)=>{
    res.json({
        message:'Pong'
        ,address:ip.address()
    })
})