const num = [3, 10, 12, -9, 6, 10, 12, -10, 20, -23, -7, 8]

// tich
let tich = 1;
for(let number of num){
    tich = tich * number;
}
console.log('tich cua mang la: ',tich)


// nho nhat chia het cho 2
let numchia2 = []
for(let number of num){
    if(number %2 === 0){
        numchia2.push(number)
    }
}

let minchia2 = numchia2[0]
for (let number of numchia2){
    if(number < minchia2){
        minchia2 = number
    }
}

console.log('so nho nhat chia het cho 2 la:',minchia2)


// lon nhat chia het cho 3
let numchia3 = []
for(let number of num){
    if(number %3 === 0){
        numchia3.push(number)
    }
}

let maxchia3 = numchia3[0];
for(let number of numchia3){
    if(number > maxchia3){
        maxchia3 = number
    }
}
console.log('so lon nhat chia het cho 3 la: ',maxchia3)


// tinh gia tri trung binh cua mang
let sum = 0
for(let i = 0; i < num.length; i++){
    sum = sum + num[i]
    //sum += num[i]
}
const avg = sum / num.length
console.log('gia tri trung binh cua mang la:',avg)



// Lọc ra các số nguyên tố trong mảng.
for(let number of num){
    if( number <= 1){
        console.log(number, 'khong phai so nguyen to')
    }
    else{
        let coun = 0

        for(let i = 1; i < number; i++){
            if(number %1 === 0){
                coun++
            }
        }
        if(coun === 2){
            console.log(number, 'la so nguyen to')
        }
        else{
            console.log(number, 'khong phai so nguyen to')
        }
    }
}


//Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.

let max10 = false

for(let number of num){
    if(number < 10){
        max10 = true
        break
    }
}
if(max10){
    console.log('mang co so nho hon 10')
}
else{
    console.log('mang khong co so nho hon 10')
}


// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
let min20 = false

for(let number of num){
    if(number > 20){
        min20 = true
        break
    }
}
if(min20){
    console.log('mang co so lon hon 20')
}
else{
    console.log('mang khong co so lon hon 20')
}



//Nhập vào số n cho đến khi n là 1 số trong mảng s.
let n;

do {
    n = Number(prompt('nhap n:'));
    if (!num.includes(n)) {
        console.log(n, 'khong co trong mang');
    }
} while (!num.includes(n));

console.log(n, 'co trong mang');


