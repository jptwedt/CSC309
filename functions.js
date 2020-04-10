var fxn = {
   greet: function(name){
      let def = 'my friend';
      return (name == '')?
         "Hello, " + def + ".":
         "Hello, " + name + ".";
   }
}

module.exports = fxn;
