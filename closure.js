function stopwath(){
    let counter =0;
    return function(){
        counter++;
        return counter;
    }
}
const watch1 = stopwath();
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());
console.log(watch1());
const watch2 = stopwath();
console.log(watch2());

console.log(watch2());
console.log(watch2());
console.log(watch2());
console.log(watch1());