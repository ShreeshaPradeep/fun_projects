const expressJs = require('express');
const expressApp = expressJs()
const path = require("path");
const fs = require("fs");


expressApp.get('/',function(req,res){
     res.send("hello world");
 });

expressApp.use(function(req,res,next){
  
let filePath = path.join(__dirname,req.url);
console.log(filePath)
console.log(req.url)

fs.stat(filePath,function(err ,fileInfo){
if(err){
    next();
    return;
    }
if(fileInfo.isFile){
    res.sendFile(filePath);
}

else{
    next();
}
});
});
 

expressApp.listen(8080,function(){
    console.log("My server is at port 8080")
})