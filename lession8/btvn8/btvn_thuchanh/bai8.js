let n = prompt('Nhap n: ')
n = Number(n)

let count = 0;

for( i = 1; i <= n; i++){
    if(n % i === 0){
        count++
    }
}

if(count === 2){
    console.log(n, 'la so nguyen to')
}
else(
    console.log(n, 'khong phai so nguyen to')
)