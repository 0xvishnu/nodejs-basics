let http=require('http');
let fs = require('fs');



function hello(req,res) {

    console.log("request recived")

    fs.readFile('tes.html', function (err,data){

        if(err){

            console.log(err)
            res.end('Server is down')
        }
        else {
            res.write(data)
            res.end();
        }



    })


}

http.createServer(hello).listen(8000);
console.log("Server started");

