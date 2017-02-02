module.exports.login = function(req, res){
    var output = `
     <form>
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