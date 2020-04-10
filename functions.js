var fxn = {
   greet: function(name){
      let def = 'my friend';
      let NAME = name.toUpperCase(); 
      if(name == ''){
         return "Hello, " + def + ".";
      }
      else if(name == NAME){
         return "HELLO, " + name + "!";
      }
      return "Hello, " + name + ".";
   }
}

module.exports = fxn;
