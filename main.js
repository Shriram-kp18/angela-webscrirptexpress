// const http=require('http');
// http.createServer(function(req,res){
//     res.write("hello world");
//     res.end();
// }).listen(8980);
//error handler

// const app=require('express')();
// app.get('/',function(req,res){
//     var err=new Error("Not Found");
//     next(err);  //using next at app.get
// })

// app.use(function(err,req,res,next){
//     res.send("there is something wrong");
// });
// app.listen(8080);

// const MongoClient=require('mongodb').MongoClient;
// const url="mongodb:localhost:27017/newdb";

// MongoClient.connect(url,function(err,db){
//     if(err) throw err;
//     console.log("db create");
//     db.close();
// })

// const MongoClient=require('mongodb').MongoClient;
// const url="mongodb:localhost:27017/";
// MongoClient.connect(url,function(err,db){
//     if(err) throw err;
//     dbo=db.db('mydb');
//     dbo.createCollection("newcollection",function(req,res){
//         console.log("collection created");
//         db.close();
//     })
// })

// //socket working
// const app=require('express')();
// const port=8080;
// const socketio=require("socket.io");
// var io;

// app.get('/',function(req,res){
//     res.sendFile(__dirname+"/index.html");
// });

// io=socketio.listen(app.listen(port));

// io.on('connection',(socket)=>{
//     console.log("`${socket.handshake.address}` is connected at `${new Date()}`");
//     socket.send("i am the server");
//       socket.on('message',(data)=>{
//          io.sockets.emit('message',data);
//       });
//     });

//     //html
//     <script>socket.io/socket.io.js</script>
//     <script>
//         var socket=io();
//         var arr=new Array();
//         socket.on('message',(data)=>{
//             data=data+'<br>'
//             arr.push(data);
//             console.log(data);
//             document.getElementById('id').innerHTML=arr;

//         })

//     </script>