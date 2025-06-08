let m, n;
do {
  m = prompt("Nhập m: ");
} while (m <= 0);
do {
  n = prompt("Nhập n: ");
} while (n <= 0);

// Tìm ước chung lớn nhất
let result = 1;
for(let i = 0; i<=m && i <=n; i++){
    if(m%i === 0 && n%i === 0){
        result = i
    }
}

console.log('result: ', result)
// Tìm bội chung nhỏ nhất
result = (m*n) / result;
console.log('result: ', result)