let x = prompt('Nhap x: ')
x = Number(x)

let y = prompt('Nhap y: ')
y = Number(y)

if (x < 0 || x >= y || y > 100 || x > 100){
    alert('gia tri dau vao khong hop le')
}
else{
    while (x < y){
        console.log(x,y)
        x++
        y--
    }
    console.log(x, y)
}