const fs = require("fs");

const data = fs.readFileSync("./simple.txt");
console.log(data.toString());
for(i=0;i<2;i++){
    console.log("Loop is Running");
}

fs.writeFile("./simple.txt","I love Programming",()=>{
    console.log("Written..........");
});