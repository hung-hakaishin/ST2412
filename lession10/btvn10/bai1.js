// 1. Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0). Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.

function bai1 (a,b,c){
    if(a === 0){
        console.log('phuong trinh khong phai la a.x^2 + b.x + c = 0')
    }

    const delta = b * b - 4 * a * c

    if(delta > 0){
        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)
        return[x1, x2]
        // Math.sqrt(delta) : là căn delta
    }
    else if(delta === 0){
        const x = -b / (2*a)
        return[x]
    }
    else{
        return[];
    }
}


const a = 1, b = -3, c = 2;
console.log(bai1(a, b, c)); 