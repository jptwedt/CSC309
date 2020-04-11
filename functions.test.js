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

test('testing uppercase detection, expect true', () => {
   const answer = fxn.isUpper("BOB");
   expect(answer).toBeTruthy();
});

test('testing uppercase detection, expect false', () => {
   const answer = fxn.isUpper("Bob");
   expect(answer).not.toBeTruthy();
});

test('testing lowercase detection, expect true', () => {
   const answer = fxn.hasLower("Bob");
   expect(answer).toBeTruthy();
});

test('testing lowercase detection, expect false', () => {
   const answer = fxn.hasLower("BOB");
   expect(answer).not.toBeTruthy();
});

test('testing all uppercase detection, expect true', () => {
   const answer = fxn.isAllUpper("BOB", "TIMOTHY");
   expect(answer).toBeTruthy();
});

test('testing all uppercase detection, expect false', () => {
   const answer = fxn.isAllUpper("Bob", "timothy");
   expect(answer).not.toBeTruthy();
});

test('testing all uppercase detection with mixed expect false', () => {
   const answer = fxn.isAllUpper("Bob", "TIMOTHY");
   expect(answer).not.toBeTruthy();
});

test('testing all uppercase detection with mixed expect false', () => {
   const answer = fxn.isAllUpper("Bob", "TIMOTHY", "gina");
   expect(answer).not.toBeTruthy();
});

test('testing all lowercase detection, expect true', () => {
   const answer = fxn.allHasLower("Bob", "martha");
   expect(answer).toBeTruthy();
});

test('testing lowercase detection, expect false', () => {
   const answer = fxn.allHasLower("BOB", "MARTHA");
   expect(answer).not.toBeTruthy();
});

test('testing lowercase detection with mixed, expect false', () => {
   const answer = fxn.allHasLower("bob", "MARTHA");
   expect(answer).not.toBeTruthy();
});

test('testing lowercase detection with 3 mixed, expect false', () => {
   const answer = fxn.allHasLower("bob", "MARTHA", "NED");
   expect(answer).not.toBeTruthy();
});

