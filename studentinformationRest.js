//get all users data
//add new user
//delete a user
const expressJs = require('express');
const bodyparser = require('body-parser');
const { response } = require('express');
const expressApp = expressJs();

let users = [
       
        {"id" : "1","name":"shreesha","class":"7th"}
        ,{"id" : "2","name":"bro","class":"8th"}
];//array of objects
expressApp.use(bodyparser.urlencoded({extended:false})) 
expressApp.use(bodyparser.json());

expressApp.get('/users',(req,res)=>{
        res.json(users).status(200);
})//upon calling get req we send users 
//add new user
expressApp.post('/user',(req,res)=>{
        const newuser = req.body;
        users.push(newuser);
        res.send("user is added in database").status(200);
})
//delete user
expressApp.delete('/user/:id',(req,res)=>{
        const userID = req.params.id;
        users = users.filter(user => {
                if(user.id != userID){
                        return true;
                }
                return false;
        });
        res.send("user is deleted").status(200);
});

expressApp.listen(8080,function(){
   console.log("my server is running at port 8080");
});

 