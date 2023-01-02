const express = require("express");
const body_parser = require("body-parser");
const app = express();
app.use(body_parser.urlencoded({extended:true}));
app.listen(3000, function(){
    console.log("Server started on port 3000");
});
app.get("/", function(request, respond){
    respond.sendFile(__dirname+"/index.html");
});
app.post("/", function(request, respond){
    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);
    var sum = num1 + num2;
    respond.send("The sum of the numbers is:- "+sum);
});