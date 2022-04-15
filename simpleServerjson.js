const http = require('http'); //http -> node's core module
const listener = function(req,res){
    console.log("server is working");
    res.setHeader('Content-Disposition','attachment;filename = myDetails.csv');

    res.writeHead(200);
    res.end(`name,school,age\nDoly,DPS,21`);
}
const simpleServer = http.createServer(listener);



simpleServer.listen(8080);