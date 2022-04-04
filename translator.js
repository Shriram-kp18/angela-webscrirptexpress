module.exports=function(){
    return function(req,res,next){
        var tamiloption=req.params.tamiloption;
        switch(tamiloption){
            case "water" :res.send("thanni");
            case "food"  :res.send("sapaadu");
            case "miracle":res.send("adhisayam");
            default :res.send("enter water,food or miracle for translation");
            next();
        }
    }
}r