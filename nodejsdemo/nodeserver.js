const http = require("http"); //for server
const fs = require("fs"); // to access html and other files
const port = 443;
const hostname = "localhost";
//home holds index.html
const home = fs.readFileSync("./index.html");
//server creation and handling.....
const server = http.createServer((req,res)=> {
    
    if(req.url=="/"){
        res.end(home);
    }
    else if(req.url=="/about"){
        res.end("<h1> ABOUT <h2>");
    }
}

);

// server listening..........
server.listen(port,hostname,()=>{
    console.log(`Server is listening on port: ${port}`);
});