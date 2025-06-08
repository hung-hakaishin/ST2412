const car1 = 'Vinfast'
const car2 = 'Toyota'
const car3 = 'Audi'

console.log(car1)
console.log(car2)
console.log(car3)


const cars = ['BMW', 'Xiaomi']
console.log(cars)




// khởi tạo mảng 
// cach 1
const emptyNumbers = [] // mang rong

const numbers = [1,2,3,4,5] // mang co chua cac phan tu

console.log(emptyNumbers)
console.log(numbers)


// cach 2

const emptyChars = new Array()
const chars = new Array ('a', 'b', 'c', 'd')

console.log(emptyChars)
console.log(chars)


// truy xuat

const fruits = ['Apple', 'Banana', 'Orange', 'Tomato']
console.log(fruits)
console.log(fruits[1])
console.log(fruits[3])

// fruits[1] = 'chuoi'
// console.log(fruits[1])

// console.log(fruits.length)

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}


for(let element of fruits){
    console.log(element)
}
 // them( 1 hoac nhieu phan tu)
console.log(fruits)
fruits.push(1)

console.log(fruits)
fruits.push(2, 3, 4, 5, 6, 7)
console.log(fruits)


// xoa (phan tu cuoi mang, chi xoa dc 1 phan tu)
console.log(fruits)
fruits.pop()
console.log(fruits)

// unshift them 1 hoac nhieu phan tu vao dau mang
fruits.unshift(-2, -1, 0)
console.log(fruits)

//shift de xoa phan tu dau mang
fruits.shift()
console.log(fruits)

// splice 

// dung splice de xoa
const num = ['a', 'b', 'c', 'd']
console.log(num)
// ['a', 'c', 'd']
// xoa 1 phan tu (vi tri, so luong)
chars.splice(1, 1)
console.log(num)

chars.splice(1, 2)
console.log(num)
// ['a', 'd']


// dung splice de them
const nu = ['a', 'b', 'c', 'd']
console.log(nu)

nu.splice(1, 0, 'x')
console.log(nu)
// ['a', 'x', 'b', 'c', 'd']

const n = ['a', 'b', 'c', 'd']
n.splice(1, 0, 'x', 'y')
console.log(n)
// ['a', 'x', 'y', 'b', 'c', 'd']



