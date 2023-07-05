/*
truthy:
1.true
2. any number (+ve or -ve) is truthy
3. any string is truthy
4. with only space string is truthy
5. empty object truthy
6. empty and with value array truthy

falsey:
1.false
2. 0 is always false
3. empty string is false
4. undefined is always false
5. null is always false

*/
const x = false;
if(x) console.log('value is true');
else console.log('value is false');

const y = 4;
if(y) console.log('value is true');
else console.log('value is false');

const z = 0;
if(z) console.log('value is true');
else console.log('value is false');

const str = 'hello';
if(str) console.log('value is true');
else console.log('value is false');

const str2 = '';
if(str2) console.log('value is true');
else console.log('value is false');

const str3 = ' ';
if(str3) console.log('value is true');
else console.log('value is false');

let a;
if(a) console.log('value is true');
else console.log('value is false');

let b = null;
if(b) console.log('value is true');
else console.log('value is false');

const c = {};
if(c) console.log('value is true');
else console.log('value is false');

const d = [];
if(d) console.log('value is true');
else console.log('value is false');

const e = '';
if(!e) console.log('value is true');
else console.log('value is false');

if(!!e) console.log('value is true');
else console.log('value is false');