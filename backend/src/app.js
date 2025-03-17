const express = require('express');
const aiRoutes = require("./routes/ai.routes");
const app = express();//created instance
const cors = require('cors');


app.use(express.json())
app.use(cors());

//test routes
app.get('/',(req,res)=>{
    res.status(200).send("This is ai powered code reviewer created by Kartavya Gore\n Visit here : https://ai-powered-code-reviewer-teal.vercel.app/");
})

app.use('/ai', aiRoutes)

module.exports = app; //exports app