// import http from "http"

// const port  = 7000;
// const server = http.createServer((req, res) =>{
// res.end("This a  server");
// })
// server.listen(port, ()=>{
//     console.log(`server is stated at ${port}`);
    
// })

// ============  Learn how to routing with Node.js ===========

import http from "http"

const port  = 7000;

const server = http.createServer((req,res)=>{
if (req.url == "/") {
    res.end("Welcome to Home page")
}else if (req.url == "/about") {
    res.end("welcome to about page")
}else if (req.url == "/contact") {
    res.end("welcome to contact page ");

}else{
    res.end("404 Not Found")
}
})

server.listen(port ,() =>{
    console.log(`stated at ${port}`);
    
})