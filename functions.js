var fxn = {
   greet: function(...args){
      let def = 'my friend';
      let resp = 'Hello, ';
      let RESP = ' AND HELLO ';

      if(args.length == 0){
         resp += (def + '.');
      }
      else{
         let argarr = Array.prototype.slice.call(args);
         let names = new Array();
         argarr.forEach(arg => {
            if(arg.includes(", ")){
               ppl = arg.split(", ");
               ppl.forEach(person => {
                  names.push(person);
               });
            }
            else{
               names.push(arg);
            }
         });

         if(module.exports.isAllUpper(...names)){
            resp = resp.toUpperCase();
            names.reverse();
            resp += names.pop();
            if(names.length > 0){
               let len = names.length;
               while(names.length > 1){
                  resp += (', ' + names.pop());
               }
               resp = (len > 1)?
                  resp + ', AND ' + names.pop():
                  resp + ' AND ' + names.pop();
            }
            resp += '!';
         }
         else if(module.exports.allHasLower(...names)){
            names.reverse();
            resp += names.pop();
            if(names.length > 0){
               let len = names.length;
               while(names.length > 1){
                  resp += (', ' + names.pop());
               }
               resp = (len > 1)?
                  resp + ', and ' + names.pop():
                  resp + ' and ' + names.pop();
            }
            resp += '.';
         }
         else{
            let lower = [];
            let upper = [];
            names.forEach(name => {
               if(module.exports.hasLower(name)){
                  lower.push(name);
               }
               else{
                  upper.push(name);
               }
            });
            lower.reverse();
            upper.reverse();
            resp += lower.pop();
            if(lower.length > 0){
               let len = lower.length;
               while(lower.length > 1){
                  resp += (', ' + lower.pop());
               }
               resp = (len > 1)?
                  resp + ', and ' + lower.pop():
                  resp + ' and ' + lower.pop();
            }
            resp += '.';
            resp += RESP + upper.pop();
            if(upper.length > 0){
               let len = upper.length;
               while(upper.length > 1){
                  resp += (', ' + upper.pop());
               }
               resp = (len > 1)?
                  resp + ', and ' + upper.pop():
                  resp + ' and ' + upper.pop();
            }
            resp += '!';
         }
      }
      return resp;
   },
   allHasLower: function(...names){
      var all_lower = true;
      names.forEach(name => {
         all_lower = (all_lower && module.exports.hasLower(name));
      });
      return all_lower;
   },
   isAllUpper: function(...names){
      var all_upper = true;
      names.forEach(name => {
         all_upper = (all_upper && module.exports.isUpper(name));
      });
      return all_upper;
   },
   hasLower: function(inname){
      name = String(inname);
      return name != name.toUpperCase();
   },
   isUpper: function(inname){
      name = String(inname);
      return name == name.toUpperCase();
   }
}

module.exports = fxn;
