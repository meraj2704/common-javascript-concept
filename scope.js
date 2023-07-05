function scope(a,b)
{
    const sum = a+b;
    console.log(sum);
    let sum2;
    if(a>b)
    {
         sum2 = a+b+10;
    }
    else{
         sum2 = a + b + 20;
    }
    console.log(sum2);
}
scope(12,23);
// console.log(sum, sum2);