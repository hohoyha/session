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

module.exports.loginpost = function(req, res){
   
   var username = req.body.username;
   var pwd = req.body.password;

   for(var i= 0; i<users.length; i++)
   {
        var user = users[i];
        if(username === user.username && pwd === user.password){
            req.session.displayname = user.displayname;

           return req.session.save(function(err) {
                console.log(user.displayname);
                console.log(req.session.displayname);
                return res.redirect('/welcome'); 
            });
        }
   }

   res.send('Who are you? <a href="/auth/logn">Login</a>');
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
       <ul>
            <li><a href="/auth/login">Login</a></li>
            <li><a href="/auth/register">register</a></li>
       </ul>
       `);     
    }  
}

module.exports.logout = function(req, res){
    delete req.session.displayname;
    req.session.save(function(err) {
        res.redirect('/welcome');
    });  
}

module.exports.register = function(req, res){
    var output = `
     <form action = "/auth/register"  method ="post">
        <p>
          <input type ="text" name="username" placeholder="username">
        </p>
        <p>
          <input type ="password" name="password" placeholder="password">
        </p>
        <p>
          <input type ="displayname" name="displayname" placeholder="displayname">
        </p>
        <p>
          <input type="submit">
        </p>
     </form>
    `;

    res.send(output);
}

var users = [
    {
      username:'hoho',
      password:'111',
      displayname:'용호'
   }

];

module.exports.registerpost = function(req, res){
    var user = {
         username: req.body.username,
         password: req.body.password,
         displayname: req.body.displayname
    }

    users.push(user);
    req.session.displayname = user.displayname;

    req.session.save(function(err){
        res.redirect('/welcome');
    })  
}
