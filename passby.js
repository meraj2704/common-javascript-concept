let n1 = 23;
let n2 = 25;
function multifly(a,b)
{
    a = 2;
    return a * b;
}
console.log(n1);
const total = multifly(n1,n2);
console.log(total);
const laptop = {brand:'hp', price:4500, ram:'8Gb'};
function change(ob)
{
    ob.price = 5000;
    return ob;
}
console.log(laptop.price);
console.log(change(laptop));
console.log(laptop.price);