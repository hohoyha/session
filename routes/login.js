module.exports.login = function(req, res){
    var output = `
     <form action = "/auth/login"  method ="post">
        <p>
          <input type ="text" name="username" placeholder="username">
        </p>
        <p>
          <input type ="password" name="password" placeholder="password">
        </p>
        <p>
          <input type="submit">
        </p>
     </form>
    `;

    res.send(output);
}

module.exports.loginprocess = function(req, res){
   var user = {
      username:'hoho',
      password:'111',
      displayname:'용호'
   }

   var username = req.body.username;
   var pwd = req.body.password;

   if(username === user.username && pwd === user.password){
      req.session.displayname = user.displayname;

      req.session.save(function(err) {
          console.log(user.displayname);
          console.log(req.session.displayname);
          res.redirect('/welcome'); 
      });
   }
}

module.exports.welcome = function(req, res){
     console.log(req.session.displayname);
    if(req.session.displayname)
    {
       res.send(`
       <h1>Hello, ${req.session.displayname}<h1>
       <a href="/auth/logout" >logout</a>`
       );
    }
    else{
       res.send(`<h1>welcome</h1>
       <a href="/auth/login">Login</a>
       `);     
    }  
}

module.exports.logout = function(req, res){
    delete req.session.displayname;
    req.session.save(function(err) {
        res.redirect('/welcome');
    });  
}