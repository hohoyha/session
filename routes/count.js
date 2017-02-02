module.exports.count = function(req, res){
    if(req.session.count)
    {
        req.session.count++;
    }else{
        req.session.count = 1;
    }
  
    res.send('count : ' + req.session.count );
}