var a= 6;
// const b=a;
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

// 1. Simple variable
let a = 10;
console.log(a);

// // 2. Object assignment
// let object1 = { age: 20 };
// let object2 = { age: 30 };
// object1 = object2;
// console.log(object1.age);

// 3. Boolean logic
let aBool = true;   
let b = false;
console.log(aBool && b);
if (aBool || b) {
    console.log("At least one is true");
}

// 4. Bitwise operators
console.log(9 & 5);
console.log(9 | 5);
console.log(9 ^ 5);

// 5. Function addition
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// 6. Function doubling array elements
function double(num) {
    return num * 2;
}
let arr = [2, 3, 4, 5, 6, 7];
let doubledArr = arr.map(double);
console.log(doubledArr);

// 7. Arrow function tripling array elements
const tripleArr = arr.map(n => n * 3);
console.log(tripleArr);

// 8. Filter odd numbers
function isOdd(num) {
    return num % 2 !== 0;
}
let numbers = [10, 15, 20, 25, 30];
let oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers);

// 9. Filter multiples of 5
let array = [15, 35, 27, 13, 20];
let multiplesOfFive = array.filter(num => num % 5 === 0);
console.log(multiplesOfFive);

// 10. Reduce to get product
let array1 = [11, 22, 33, 44];
let product = array1.reduce((product, current) => product * current, 1);
console.log(product);

// 11. Map → Filter → Reduce example
let a1 = [1, 2, 3, 4, 5, 6];
let ans = a1
    .map(n => n * n)
    .filter(n => n % 2 === 0)
    .reduce((sum, cur) => sum + cur, 0);
console.log(ans);

// 12. Destructuring
let bArr = [1, 2, 3, 4, 5];
const [one, two] = bArr;
console.log(two); 

//13.. Using spread 
let num = [0, ...bArr, 7];
console.log(num); 

//
let b1 = [1, 2, 3, 4, 5];
let num2 = [0, ...b, 0, 7];
console.log(num);
const obj1 = { x: 3, y: 5 };
const obj2 = { y: 6, z: 7 };
const spread = { ...obj1, ...obj2 };
console.log(spread);