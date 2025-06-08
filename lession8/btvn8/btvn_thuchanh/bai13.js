let n;
do{
    n = Number(prompt("Nhap n: "))
}
while(n<2)

for (let i = 1; i <= n; i++) {
  let vuong = "";
  for (let j = 1; j <= n; j++) {
    vuong += "* ";
  }
  console.log(vuong);
}
