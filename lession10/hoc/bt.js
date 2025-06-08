const emptyObject = {}  // object rong

const variable = 'name'

const trainingCenter = {
    name: 'T3H',
    address: 'Ha Noi',
    courses: ['ReadJS', 'Html','css'],
    1: 'One',
    $: 'dollar'
}
console.log(emptyObject)
console.log(trainingCenter)

console.log(trainingCenter.name)
console.log(trainingCenter['name'])

// console.log(trainingCenter.1) khong dung duoc loi
console.log(trainingCenter['1'])


// console.log(trainingCenter.variable) //in ra: undifine
// console.log(trainingCenter[variable]) //in ra: T3H


// sua
trainingCenter.address = 'ho tung mau'
console.log(trainingCenter)

// them
trainingCenter['quality'] = 'tot'
console.log(trainingCenter)

// delete
delete trainingCenter.courses
console.log(trainingCenter)

// duyet object
for(let key in trainingCenter){
    console.log(trainingCenter[key])
}

const keys = Object.keys(trainingCenter)
console.log(keys)

const values = Object.values(trainingCenter)
console.log(values)

// kiem tra key co ton tai hay k  true or false
console.log(trainingCenter.hasOwnProperty('quality'))
console.log(trainingCenter.hasOwnProperty('name'))


// luu tru
const number1 = 10
const number2 = 10
console.log(number1 === number2)


const obj1 = {
    name: 't3h'
}
const obj2 = {
    name: 't3h'
}
console.log(obj1 == obj2)
//=> false vi no so sanh dia chi o nho chu k phai gia tri

// sao chep
const obj3 = obj2
obj3.name = 'trung tam lap trinh'
console.log(obj2)
console.log(obj3)

// const obj3 = {}
// obj3.name = obj2.name
// console.log(obj2)
// console.log(obj3)

// kiem tra kieu du lieu
const student1 = {
    name: 'nguyen van a'
}
const arr1 = [1,2,3]
const null1 = null

console.log(typeof student1)
console.log(typeof arr1)
console.log(null)

// array.isarray
console.log(Array.isArray(1))
console.log(Array.isArray('abc'))
console.log(Array.isArray(arr1))

// console.log(
//     typeof student1 === 'object' && !Array.isArray(student1) && student1 !== null
// )


// mutable/inmutable
const stu1 ={
    name: 'lung thi linh'
}
stu1.name = 'le van c'
console.log(stu1)





// ham(function)
console.log('hnay troi dep')
console.log('hnay troi mua')
console.log('hnay thu hai')
console.log('---------------------')

function logger (){
    console.log('hnay troi dep')
    console.log('hnay troi mua')
    console.log('hnay thu hai')
    console.log('---------------------')
}
logger();
logger();
logger();


function add(a,b){
    const sum = a+b
    console.log(sum)
    return sum
}
add(7,5);

const x = add(7,5);
console.log('x :',x)





//bai tap
function calculate (a,b){
    const result = (a + b)**2

    return result
}
console.log(calculate(3,4))
// gon hon
function calculate (a,b){
    return (a + b)**2
}
console.log(calculate(3,4))


// function checkNumber(number){
//     if(number < 0){
//         return 'so am'
//     }
//     if(number === 0){
//         return 'so khong'
//     }
//     return 'so duong'
// }
// const abc = 5
// console.log(checkNumber(abc))


function checkNumber(number){
    const number = prompt('nhap gia tri: ')
    if(number < 0){
        return 'so am'
    }
    if(number === 0){
        return 'so khong'
    }
    return 'so duong'
}
console.log(checkNumber())

