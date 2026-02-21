import express from 'express'
const app = express()
app.listen(8080,()=>{
    console.log("Server started")
})
app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>")
})
app.get("/home",(req,res)=>{
    res.send("This is home API")
})
app.get("/users",(req,res)=>{
    res.send("This is users page")
})