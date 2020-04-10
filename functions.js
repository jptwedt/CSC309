var fxn = {
   greet: function(...names){
      let def = 'my friend';
      let resp = "Hello, ";

      if(names.length == 0){
         resp += def + ".";
      }
      else if(names.length == 1){
         let NAME = names[0].toUpperCase();
         if(names[0] == NAME){
            resp = resp.toUpperCase() + NAME + "!";
         }
         else{
            resp += names[0] + ".";
         }
      }
      else{
         resp += names[0];
         names.slice(1).forEach(name => {
            resp += " and " + name;
         });
         resp += ".";
      }
      return resp;
   }
}

module.exports = fxn;
