'strict';
//CREATE A SERVER WITHOUT EXPRESS

const http = require("http")
const port = process.env.port || 5000;
http.createServer((req,res)=>{
res.writeHead(200, {"Content-Type": "text/html"});
// add routes

//Req Res Example
const url=req.url;

if (url === "/profile"){
    res.write("<h1>Welcome to your profile</h1>")
    res.write("<p>You are Him</p>")
    res.write("<p>You are 23</p>")
} else if(url === "/job"){
    // JSON Example
    const work = {
        address: {
            street: "Red Ventures",
            city: "Charlotte"
        },
    };
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringify(work));
    res.end();
   } else{
    res.write("<h1>Hellp there C13</h1>");
    res.end();
   }
})
.listen(port,()=> {
    console.log(`server listening on port ${port}`)
})
