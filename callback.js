function greeting(person, name){
    person(name);
}
function handler(name){
    console.log('hei', name);
}
function handler2(name){
    console.log('hello', name);
}
greeting(handler, 'tom');
greeting(handler, 'cruise');
greeting(handler2, 'jhankar');