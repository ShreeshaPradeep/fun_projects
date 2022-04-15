const expressJs = require('express');

const expressApp = expressJs();

expressApp.get('/',function(req,res){res.send('Hello Wolrd\n');
        })

expressApp.get(/^\/students\/(\d+)$/,function(req,res){
        console.log(req.params)
        res.send('the student id is :'+ req.params[0]);})

//expressApp.get('/students/:studentId',function(req,res){res.send('the student id is :'+ req.params.studentId+"\tregion :"+req.params.region);})
expressApp.get('/students/:studentId/:region',function(req,res){res.send('the student id is :'+ req.params.studentId+"\tregion :"+req.params.region);})

expressApp.listen(8080,function(){
   console.log("my server is running at port 8080");
});

 