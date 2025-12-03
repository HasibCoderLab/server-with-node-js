import http from "http"

const server = http.createServer((req,res) =>{
    res.end("This is Firs Server");
})

server.listen(8000, () => {
    console.log(`server started at ${8000}` );
    
})