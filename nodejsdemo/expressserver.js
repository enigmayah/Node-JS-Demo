require('dotenv').config();
const express = require("express");
const path = require("path");
const helmet = require("helmet");

const app = express();

// Use Helmet for secure headers
app.use(helmet());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/formsubmit",(req,res)=>{
    // In a real app, we would process req.body.name and req.body.pass securely
    res.send("<h1>Form submitted successfully</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is Listening on port ${port}........`);
});
