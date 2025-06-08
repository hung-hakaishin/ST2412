let n;
do {
  n = Number(prompt("Nhap"));
} while (n < 2 || n > 10);

for (let i = 1; i <= 10; i++) {
  console.log(n, "*", i, "=", i * n);
}