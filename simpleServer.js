const http = require('http'); //http -> node's core module
const listener = function(req,res){
    res.setHeader('Content-Type','text/html');
    console.log("server is working");
    res.writeHead(200);
    //res.end("our server is live");
    switch(req.url){
        case "/name":
            res.end("HTTP SERVER RESPONSE:wassup");
            break;
        case "/company":
            res.end("HTTP SERVER RESPONSE : MNC")
            break;  
    default:
        res.end("<h1> HTTP SERVER RESPONSE: INCORRECT END POINT <a href ='http://localhost:8080/name'/>Go here </a></h1>")
    }
}
const simpleServer = http.createServer(listener);



simpleServer.listen(8080);