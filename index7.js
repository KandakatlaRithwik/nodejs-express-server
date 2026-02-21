import express from "express";  
const app = express();
app.listen(8080);       
app.get("/", (req, res) => {
    const user = {
        name: "Rithwik",
        age: 19,
    };
    res.json(user);
});