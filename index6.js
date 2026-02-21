import express from "express";
const app = express()
app.listen(8080);
app.get("/", (req, res) => {
  res.send(req.query.id+" "+req.query.name );
}  );
//http://localhost:8080/?id=3&name=john in the postman