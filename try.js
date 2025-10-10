var a= 6;
const b=a;
a=4;
console.log(b);
console.log(a);

let object1={
    name:"karthikha",
    age:21,
    city:"bangalore"
}
let object2=object1;
object1.age=22;
console.log(object2.age);
console.log(object1.age);


a=true;
b=false;
console.log(a && b); 
console.log(a<<b);
console.log(a >> b);
console.log(a ^ b);
console.log(a | b);
console.log(a & b);
if(a || b){
    console.log("At least one is true");
}


console.log(9&5);
console.log(9|5);
console.log(9^5);


function add(a,b){
    return(a+b);
}
console.log(add(10,20));