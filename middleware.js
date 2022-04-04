module.exports=function(){
    return function(req,res,next){
        res.send("middle ware is working");
        next();
    }
}