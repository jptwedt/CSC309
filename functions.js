var fxn = {
   greet: function(...names){
      let def = 'my friend';
      let resp = 'Hello, ';
      let RESP = ' AND HELLO ';

      if(names.length == 0){
         resp += (def + '.');
      }
      else if(names.length == 1){
         let NAME = names[0].toUpperCase();
         if(names[0] == NAME){
            resp = resp.toUpperCase() + NAME + '!';
         }
         else{
            resp += (names[0] + '.');
         }
      }
      else{
         let lower = [];
         let upper = [];
         names.forEach(name => {
            if(name == name.toUpperCase()){
               upper.push(name);
            }
            else{
               lower.push(name);
            }
         });
         if(lower.length == 0){
            resp = resp.toUpperCase();
            resp += upper[0];
            upper.slice(1).forEach(up => {
               resp += (' AND ' + up);
            });
            resp += '!';
         }
         else if(upper.length == 0){
            resp += lower[0];
            lower.slice(1).forEach(low => {
               resp += (' and ' + low);
            });
            resp += '.';
         }
         else{
            resp += lower[0];
            if(lower.length > 1){
               lower.slice(1).forEach(low => {
                  resp += (' and ' + low);
               });
            }
            resp += '.';
            resp += RESP + upper[0];
            if(upper.length > 1){
               upper.slice(1).forEach(up => {
                  resp += (' AND ' + up);
               });
            }
            resp += '!';
         }
      }
      return resp;
   }
}

module.exports = fxn;
