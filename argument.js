function sum(a , b, c)
{
    console.log(arguments[4]);
    const result = a + b + c;
    return result;
}
const total = sum(1,2,3,4,5);
console.log(total);