// 2. Khai báo 1 function với đầu vào là 3 số a, b, c. Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.

function bai2 (a,b,c){
    return a > 0 && b > 0 && c > 0 &&
    a + b > c &&
    a + c > b &&
    b + c > a 
}
console.log(bai2(3, 4, 5));  
console.log(bai2(1, 2, 3));  
console.log(bai2(5, 5, 5));