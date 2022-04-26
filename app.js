var http= require('http');

http.createServer (function(req, res){
    res.write("Hello nodemon in google")
    res.end();
    }).listen(8000);
