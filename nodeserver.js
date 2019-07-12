let http=require('http');

function hello(req,res) {

    console.log("request recived")

    res.end("Hello..Welcome to my first server");

}

http.createServer(hello).listen(8000);
console.log("Server started");

