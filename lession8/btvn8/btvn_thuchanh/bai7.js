let n = prompt('Nhap n: ')
n = Number(n)

let uoc = 1;
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);
        uoc++;
    }
}