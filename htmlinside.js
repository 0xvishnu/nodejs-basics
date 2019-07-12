let http=require('http');
let fs = require('fs');



fs.readFile('test.html', function (err,data){
    if (!err){

        http.createServer(

            function (req,res){

                res.write(data)
                res.end();




            }




        ).listen(8000);




    }
    else{

        console.log(err)
        res.end("server is missing")
    }




})