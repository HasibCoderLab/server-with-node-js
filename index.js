import http from "http"

const port  = 7000;
const server = http.createServer((req, res) =>{
res.end("This a  server");
})
server.listen(port, ()=>{
    console.log(`server is stated at ${port}`);
    
})