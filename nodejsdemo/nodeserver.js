require('dotenv').config();
const http = require("http"); //for server
const fs = require("fs"); // to access html and other files
const path = require("path");

const port = process.env.PORT || 3000;
const hostname = "localhost";

//home holds index.html
const home = fs.readFileSync(path.join(__dirname, "index.html"));

//server creation and handling.....
const server = http.createServer((req,res)=> {
    
    if(req.url=="/"){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(home);
    }
    else if(req.url=="/about"){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("<h1> ABOUT </h1>");
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Not Found");
    }
}

);

// server listening..........
server.listen(port,hostname,()=>{
    console.log(`Server is listening on port: ${port}`);
});
