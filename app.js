const express=require("express");
const bodyParser=require("body-parser");
const app= express();

var lists=[];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/",function(req,res){
    var today=new Date();

    var options= {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day=today.toLocaleDateString("en-US",options);
    res.render("list",{days:day, newLists:lists});
});

app.post("/",function(req,res){
    var item= req.body.newItem;
    console.log(item);

    lists.push(item);

    res.redirect("/");
});

app.listen(3000,function(res,req){
    console.log("Server started!");
});
