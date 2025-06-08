let m, n;
do {
  m = prompt("Nhap m: ");
} while (m < 2);
do {
  n = prompt("Nhap n: ");
} while (n < 2);

for (let i = 1; i <= n; i++) {
  let horizontalEdge = "";
  for (let j = 1; j <= m; j++) {
    horizontalEdge += "* ";
  }
  console.log(horizontalEdge);
}
