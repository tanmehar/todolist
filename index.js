const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/",function(req,res){
    
    let weekendOrNot = function(currentDay){
        if(currentDay=="saturday"||currentDay=="sunday"){
            res.send("it's a weekend");
        }
        else{
            res.send("It's a working day.");
        }
    }
    
    weekendOrNot("saturday");
});


app.listen(3000,function(){
    console.log("listening in port 3000");
})