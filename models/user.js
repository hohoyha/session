var user = {
      username:'hoho',
      password:'111',
      displayname:'용호'
   }

function userList(){
    var list = [];

    this.push = function( user ){
        list.push(user);
    };

    this.find = function(user){
        var find;    
        
        for( i=0; i<list.length; i++)
        {
            if(user.displayname === list[i])
            {
                find = list[i];
            }
        }


      //  for( user u; list.length >0; )
        /*
        list.forEach(function(element) {
             if(element == user)
             {
                 find = element;
             }
        }, this);
        */

        return find;
    }
}