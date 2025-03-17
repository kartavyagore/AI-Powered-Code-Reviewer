const express = require('express');
const aiRoutes = require("./routes/ai.routes");
const app = express();//created instance
const cors = require('cors');


app.use(express.json())
app.use(cors());

//test routes
app.get('/',(req,res)=>{
    res.status(200).send("Hello World this is mern stack");
})

app.use('/ai', aiRoutes)

module.exports = app; //exports app