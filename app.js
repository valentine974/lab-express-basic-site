const express = require('express')

const app = express()

app.get('/home',(request,response)=> {
    response.sendFile(__dirname + '/views/index.html')
})

app.get('/about',(request,response)=> { 
    response.sendFile(__dirname + '/views/about.html')})

app.get('/works',(request,response)=> {
    response.sendFile(__dirname + '/views/works.html')})

app.listen(3000,()=>console.log('server connected'))