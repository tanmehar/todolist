const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Wake Up","Exercise","Code","More Code"];

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    
    let today = new Date();
    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };

    let day = today.toLocaleDateString("en-Us",options);

        res.render("list",{
            kindDay:day,
            newListItems:items

        });
});

app.post("/",function(req,res){
    let addNew = req.body.addList;
    items.push(addNew);
    res.redirect("/");
})


app.listen(3000,function(){
    console.log("listening in port 3000");
})