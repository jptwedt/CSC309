const fxn = require('./functions.js');

test('should return Hello, <name>.', () => {
   const answer = fxn.greet('Bob');
   expect(answer).toMatch(/Hello, Bob\./);
});

test('passing null, should return Hello, my friend.', () => {
   const answer = fxn.greet('');
   expect(answer).toMatch(/Hello, my friend\./);
});

test('passing shout, expect HELLO, BILL!', () => {
   const answer = fxn.greet('BILL');
   expect(answer).toMatch(/HELLO, BILL!/);
});
