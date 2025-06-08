const s = ['vui', 'buon','khoc','cuoi','vuimung','dau','daubuon','khoccuoi', 'hi','no','ai','lac']
let text = prompt('nhap text: ' )

//Tìm 1 chuỗi đầu tiên có độ dài nhỏ nhất trong mảng.

let hmin = s[0]
for(let string of s){
    if(hmin.length > string.length){
        hmin = string
    }
}
console.log(hmin)



//-Tìm những chuỗi trong mảng có chứa giá trị text.

let ketQua = s.filter(item => item.includes(text));

// Hiển thị kết quả
if (ketQua.length > 0) {
    console.log(`Các chuỗi chứa "${text}" là:`, ketQua);
} else {
    console.log(`Không có chuỗi nào chứa "${text}".`);
}





//-Tạo mảng mới newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s.

// Tạo mảng newS gồm 3 ký tự đầu tiên của từng phần tử trong s
let newS = s.map(item => item.substring(0, 3));

// Hiển thị kết quả
console.log('Mảng newS gồm 3 ký tự đầu tiên:', newS);





//-Tạo ra 1 chuỗi là sự kết hợp của các phần tử trong s. Mỗi phần tử cách nhau bởi dấu ‘-’

// Tạo chuỗi kết hợp với dấu '-'
let chuoiKetHop = s.join('-');

// Hiển thị kết quả
console.log('Chuỗi kết hợp:', chuoiKetHop);
