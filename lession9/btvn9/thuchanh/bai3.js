let d1 = prompt('nhap d1, cach nhau boi dau "," : ')
let d2 = prompt('nhap d2, cach nhau boi dau "," : ')

// chuyen chuoi thanh mang so
let mang1 = d1.split(',').map(Number)
let mang2 = d2.split(',').map(Number)

console.log('mang 1 sau khi tach: ',mang1)
console.log('mang 2 sau khi tach: ',mang2)



//-Kiểm tra xem tất cả các giá trị số trong d1 có nằm trong d2 không.
let tcmang2 = mang1.every(value => mang2.includes(value))


if(tcmang2){
    console.log('tat ca mang 1 co trong mang 2')
}
else{
    console.log('khong phai tat ca mang1 co trong mang2')
}




//-Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
let tongmang1 = mang1.reduce(function (sum, value) {
    return sum + value;
}, 0);

console.log('tong mang1 la:: ', tongmang1);

let phantuchiahet = mang2.some(mun => mun % tongmang1 === 0)

if(phantuchiahet){
    console.log('co it nhat 1 phan tu o mang 2 chia het cho tong mang 1')
}
else{
    console.log('khong co phan tu nao')
}



//-Tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong d2 và d1.
let mangchiahet2 = mang2.filter(chia2 => chia2 %2 === 0).concat(
                   mang1.filter(chia2 => chia2 %2 === 0))
    console.log('mang moi chia het cho 2 tu mang1 va mang2 la: ', mangchiahet2)



//-Giả sử d1, d2 là các dãy số xếp theo thứ tự tăng dần. Hãy tạo ra 1 dãy số theo thứ tự tăng dần bao gồm các số của d1 và d2 (Sử dụng core của thuật toán Merge Sort)

function mergeSortedArrays(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;

    // So sánh từng phần tử và gộp theo thứ tự tăng dần
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Thêm các phần tử còn lại (nếu có) của arr1
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    // Thêm các phần tử còn lại (nếu có) của arr2
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// Tạo mảng mới theo thứ tự tăng dần
let mangMoi = mergeSortedArrays(mang1, mang2);
console.log('Mảng mới sau khi gộp theo thứ tự tăng dần: ', mangMoi);
