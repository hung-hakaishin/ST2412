function sum (a, b = 0, c = 0){
    return a + b + c;
}
const result1 = sum(10);
const result2 = sum(10, 20);
const result3 = sum(10, 20, 30);

// result1 = 10
// result2 = 30
// result3 = 60


console.log(result1);
console.log(result2);
console.log(result3);


function nhan (a , b = 1, c = 1){
    return a * b * c;
}
const result4 = nhan(10);
const result5 = nhan(10, 20);
const result6 = nhan(10, 20, 30);

console.log(result4);
console.log(result5);
console.log(result6);




const course = 'javascript'
function logger (){
    return 'day la ham logger'
}
const str1 = `khoa hoc nay là: ${logger()}`;
console.log(str1);





// var fruits = ['apple', 'orange', 'banana','tomato'];
// // ES5 truoc
// // var fruits1 = fruits[0];
// // var fruits2 = fruits[1];
// // var fruits3 = fruits[2];
// // var fruits4 = fruits[3];


// //ES6
// const [fruits1, fruits2, fruits3, fruits4] = fruits;

// console.log(fruits1);
// console.log(fruits2);
// console.log(fruits3);
// console.log(fruits4);

// const student = {
//     name: 'Tran thi B',
//     address: 'dien bien',
//     age: 19
// }
// //ES5
// // const name = student.name;
// // const address = student.address;
// // const age = student.age;

// //ES6
// // nameStudent
// const {nam: nameStudent, address, age, level = 1} = student;
// console.log(nameStudent);
// console.log(address);
// console.log(age);
// console.log(level);



// const name = 'lung thi linh'
// const age = 18

// const student = {
//     nameStudent: name,
//     age,
//     greeting: function(number){
//         console.log('hello', number);
//     }
// }
// console.log(student);
// console.greeting(10)


const keyObject = 'name'
const obj ={
   [ variable]: 10,
}
console.log('obj: ',obj);



//5 arrow function
//ES6
// function sum (a, b){
//     return a+b;
// }

//ES6
// const /let/var functionName = (parameter1, parameter2, ..., parameterN) => {
//     // logic Ham
// }

const sum = (a,b) =>{
    return a + b;
}
// const sum = (a,b) => a + b; nếu có 1 dòng là return

console.log(sum(10, 20));

// 7. 
// const/ let / var
// import {PI, logger as loggerHelpper} from './helpper.js';
// function logger(){
//     console.log('day la file logger')
// }
// console.log(PI);
// logger();
// loggerHelpper();

import * as exported from './helpper.js';

function logger(){
    console.log('day la file logger')
}
console.log(exported.PI);
logger();
exported.logger();


//  
