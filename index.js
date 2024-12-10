//first server:
require('dotenv').config()
const express = require('express')//require module syntax hai---(alternative import express from "express")
const app = express()//express ko require variable ke help se express() me le liya now app variable me (Math ke andar pi bhi hai math ke andar abs bhi hai so Now hmm app. kaafi cheeze use kar sakte hai
const port = 3000//Virtual ports computer ke inside hote hai and kaafi free hote hai......because  hmme request bhejne ke baad server kisi port par listen toh karega......

app.get('/', (req, res) => { // '/' ek home route listen kro agar waha apke paas koi request aati hai toh callback denge -------ek request hoga aur ek response ------response mein hmm send kar denge 'Hello World!'
  res.send('Hello World!')
})
//Express yhi kaam karti hai -----response and request
app.get('/google',(req,res)=>{
res.send('deepa patel--employer')//sending response----res.send()
})
app.get('/login',(req,res)=>{
res.send('<h1> Please login at chai aur code </h1>')//send ke ander aap <h1> bhej sakte ho,json bhej sakte ho,cookie bhej sakte ho
})
app.get('/microsoft',(req,res)=>{
res.send("<small>Life is <h1>Good!!</h1> until it isn't</small>")
})
//listen ki power bhi express se aati hai aur ab express ki saari functionalities app. mein hai
app.listen(process.env.PORT, () => { //listen method use kro aur server listen karega
  console.log(`Example app listening on port ${port}`)
})


//this is my first server application 


