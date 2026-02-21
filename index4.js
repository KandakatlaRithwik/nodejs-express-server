import express from 'express';
const app = express();
app.listen(8080,()=>{
    console.log("Server started");
});
//express.json() function will convert json input
app.get("/",(req,res)=>{
    res.send("Hello World");
});
//request parameter
app.get("/:id",(req,res)=>{
    const id = req.params.id;
    res.send(`This is ${id} page`);
});
app.get("/:id/:name",(req,res)=>{
    const id = req.params.id;
    const name = req.params.name;
    res.send(`This is ${id} page with name ${name}`);
});

app.get("/id/:id/name/:name",(req,res)=>{
    const id = req.params.id;
    const name = req.params.name;
    res.send(`This is ${id} page with name ${name}`);
});