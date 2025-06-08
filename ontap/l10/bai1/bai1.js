//1. Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0).
//Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 và đưa ra kết quả dưới dạng       1 mảng      gồm các nghiệm của phương trình.

// th1: 2 no phân biệt
// th2: x1 = x2
// th3: vo no

function bai1 (a,b,c){
    if(a === 0){
        return null
    }

    const delta = (b**2) - (4 * a * c)
    if(delta < 0){
        return[]
    }
    else if (delta === 0){
        const value = -b / (2*a)
        return [value, value]
    }
    else{
        const value1 = (-b + Math.sqrt(delta)) / (2 * a)
        const value2 = (-b - Math.sqrt(delta)) / (2 * a)

        return[value1, value2]
    }

}

let input1 = prompt('nhap a: ')
let input2 = prompt('nhap b: ')
let input3 = prompt('nhap c: ')

input1 = Number(input1)
input2 = Number(input2)
input3 = Number(input3)

const result = bai1(input1, input2, input3)


// in ra kqua va dien dat cho nguoi dung hieu
if(result === null){
    console.log('phuong trinh vo no')
}
else if(result.length === 0){
    console.log('k phai phuong trinh bac 2')
}
else if(result.length === 1){
    console.log('phuong trinh co no kep: ',result[0])
}
else {
	const x1 = result[0];
	const x2 = result[1];
	const log =
		'Phương trình có 2 nghiệm phân biệt: x1 = ' + x1 + ' và x2 = ' + x2;
	console.log(log);
}

