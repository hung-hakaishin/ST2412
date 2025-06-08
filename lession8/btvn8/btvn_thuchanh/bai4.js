let n = prompt('Nhap n: ');
n = Number(n);

let gt = 1;
for (let i = 1; i <= n; i++){
    gt = gt * i;
}
console.log(gt);