let n = prompt('Nhap n: ')
n = Number(n)

let s = 0;
for(let i = 1; i <= n; i++){
    s += 1 / (n*(n+1))
}
console.log(s)