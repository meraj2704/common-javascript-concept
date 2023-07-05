/*
    8.ways to get undefine
1.variable that is not initialized will give undefined
2. function with no return
3. parameter that will not pass in function 
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside of the index range
7. deleting an element inside an array
8. set a value directly to undefined
*/

// 1
let first;
console.log(first);
// 2
function second( a,b){
    const total = a+b;
}
const result = second();
console.log(result);
// 3
function third(a,b,c,d)
{
    console.log(a,b,c,d);
}
third(10,12);
// 4
function fourth(a,b)
{
    if(a<0 || b<0) return
    return a+b;
}
const result4 = fourth(3,-3);
console.log(result4);
// 5
const fifth = {id:2, name:'hello'};
console.log(fifth.salary);
// 6
const sixth = [1,2,3,4,5];
console.log(sixth[1], sixth[100]);
// 7
delete sixth[1];
console.log(sixth);
// 8
const eighth = undefined;
console.log(eighth);
