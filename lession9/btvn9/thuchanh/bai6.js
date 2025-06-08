let s = prompt('nhap day so, cach nhau boi dau "," : ')

// chuyen chuoi thanh mang so
let mang = s.split(',').map(Number)

console.log('mang sau khi tach: ',mang)

// tim so > 5 va %2

let socan = mang.find((so) => so > 5 && so %2 === 0)
if(socan !== undefined){
    console.log('so dau tien tong mang > 5 & %2 la', socan)
}
else{
    console.log('khong co so thoa man dieu kien')
}

// Tìm tất cả số lẻ trong dãy s .
let le = []
for(let number of mang){
    if(number %2 !== 0){
        le.push(number)
    }
}
console.log('tat ca so le co trong mang la: ',le)


//-Biến đổi dãy s thành dãy x mà các phần tử của dãy x là bình phương các phần tử của dãy s.
let x = []
for(let number of mang){
    //Bình phương và thêm vào mảng x
    x.push(number ** 2)
}
console.log('day x la: ',x)