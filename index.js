const express= require('express');
// const middle=require("./middleware.js");
// const tamiltranslate=require("./translator.js");
const app=express();
// app.use(function(req,res,next){
//     res.send("request ip" + req.ip);
    
//     next();
// })
// app.use("/middle",middle());
// app.get("/tamil",function(req,res){
//     res.send("tamil words translator for words food,water,miracle , also pass words through params");
// });
// app.use("/tamil/:tamiloption",tamiltranslate());
app.get("/",function(req,res){
    res.send('Accessing different pages using routing through html pages')
});    
// app.put("/",function(req,res){
//     res.send('edited page')
// })
// app.get("/html1",function(req,res){
//     res.sendFile(__dirname+"/index1.html");
// });
// app.get("/html2",function(req,res){
//     res.sendFile(__dirname+"/index2.html");
// });
// app.get("/html3",function(req,res){
//     res.sendFile(__dirname+"/index3.html");
// });
app.listen(3000,function(res){
    console.log("express server running at 3000 ");
});

