// if
let score = 7;

if(score >= 8.0){
    console.log('hsg');
}


if(score >= 6.5){
    console.log('hsk');
}

let weather = 'rain';

if(weather === 'rain'){
    console.log('hom nay mua')
}


// các giá trị falsy ( tương đương với false)
// 0
// null
// underfinde
// NaNN
if(1){
    console.log('duoc chay')
}
if(0){
    console.log('khong duoc chay')
}


let scor;
if(scor){
    console.log('chua chay vao if')
}

scor = 0;
if(scor){
    console.log('van chua chay vao if')
}

scor = 1;
if(scor){
    console.log('chay vao if')
}

scor = 7;
if(scor){
    console.log('van chay vao if')
}


// if va else co ban

let sco = 7.9;
if(sco >= 8.0){
    console.log('ban la hsg')
}
else{
    console.log('ban chua la hsg')
}

let gender = 'girl';
if(gender === 'girl'){
    console.log('ban la con gai')
}
else{
    console.log('ban la con trai')
}






// else if

// bai toan xep loai hoc luc dua theo diem
// gioi: diem >= 8.0
// kha: >= 6.5 <= diem < 8.0
// trung binh: 5.0 <= diem < 6.5
// yeu: diem < 5.0

let diem = 6.8;

if(diem >= 8.0){
    console.log('hoc luc gioi')
}
else if ( diem >= 6.5 && diem < 8.0){
    console.log('hoc luc kha')
}
else if (diem >= 5.0 && diem < 6.5){
    console.log('hoc luc trung binh')
}
else{
    console.log('hoc luc yeu')
}


let notification;
if( weather === 'rain'){
    notification = 'duoc nghi hox'
}
else{
    notification = 'di hoc'
}


// switch va case
let month = 110;
switch(month){
    case 1:
        console.log('thang 1')
        break;
    case 2:
        console.log('thang 2')
        break;
    case 3:
        console.log('thang 3')
        break;
    case 4:
        console.log('thang 4')
        break;
    case 5:
        console.log('thang 5')
        break;
    case 6:
        console.log('thang 6')
        break;
    case 7:
        console.log('thang 7')
        break;
    case 8:
        console.log('thang 8')
        break;
    case 9:
        console.log('thang 9')
        break;
    case 10:
        console.log('thang 10')
        break;
    case 11:
        console.log('thang 11')
        break;
    case 12:
        console.log('thang 12')
        break;

    default:
        console.log('thang khong hop le')
        break;
}





// vong lap

// for

for(let i = 1; i<= 5; i++){
    console.log(i);
}

for(let i = 1; i <= 500; i++){
    console.log(i)
}

for(let i = 1; i <= 300; i++){
    if(i % 2 === 0 && i % 3 === 0){
        console.log(i)
    }
}

//vd

let a = 0;
for(; a < 99; a++){
    console.log(a)
}

for(let a = 0; a < 99;){
    console.log(a)
    a++;
}




// while

let b = 1;
while(b<=5){
    console.log(b)
    b++;
}

let i = 1;
while(i<=300){
    if(i % 2 === 0 && i % 3 === 0){
        console.log(i)
    }
    i++;
}


// do while

let c = 1;
do{
    console.log(c);
    c++;
}
while(c <= 5);

// break va continue
for (let i = 1; i <= 1000; i++){
    console.log(i)
    if(i === 5){
        break;
    }
}

for (let x = 1; x <= 10; x++){
    if(x === 5){
        continue;
    }
    console.log(x);
}

// bai tap
// let n = prompt('moi ban nhap n');
// console.log(n)

// let number1 = prompt('number 1:')
// number1 = Number(number1)

// let number2 = prompt('number 2:')
// number2 = Number(number2)

// console.log(number1 + number2);



// bai 3
let sum = 0
for (number = -30; number <= 50; number ++){
    if(number % 2 === 0){
        console.log(sum);
        sum = sum + number;
    }
}
console.log(sum)

// bai 4
// let n = prompt('Nhap n: ');
// n = Number(n);

// let gt = 1;
// for (let i = 1; i <= n; i++){
//     gt = gt * i;
// }
// console.log(gt);

// bai 5

let A = prompt('Nhap A:')
A = Number(A)
let B = prompt('Nhap B:')
B = Number(B)

if(A >= B){
    alert('gia tri dau vao chua hop le')
}
else{
    let X = prompt('Nhap X:')
    X = Number(X)

    for(let i = A + 1; i < B; i++){
        if(i % X === 0){
            console.log(i);
            break;
        }
    }
}


