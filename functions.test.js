const fxn = require('./functions.js');


test('should return Hello, <name>.', () => {
   const answer = fxn.greet('Bob');
   expect(answer).toMatch(/Hello, Bob\./);
});

test('passing null, should return Hello, my friend.', () => {
   const answer = fxn.greet();
   expect(answer).toMatch(/Hello, my friend\./);
});

test('passing shout, expect HELLO, BILL!', () => {
   const answer = fxn.greet('BILL');
   expect(answer).toMatch(/HELLO, BILL!/);
});

test('passing two args, expect Hello, Jill and Jane', () => {
   const answer = fxn.greet('Jill', 'Jane');
   expect(answer).toMatch(/Hello, Jill and Jane\./);
});

test('passing mixed args, two lower, one upper', () => {
   const answer = fxn.greet('Amy', 'BRIAN', 'Charlotte');
   expect(answer).toMatch(/Hello, Amy and Charlotte. AND HELLO BRIAN!/);
});

test('passing irregular grouping, (lower), (lower,lower)', () => {
   const answer = fxn.greet("Bob", "Charlie, Dianne");
   expect(answer).toMatch(/Hello, Bob, Charlie, and Dianne\./);
});

