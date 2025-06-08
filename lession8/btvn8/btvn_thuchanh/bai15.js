let n;
do {
  n = prompt("Nhập n: ");
} while (n < 3);
for (let i = 1; i <= n; i++) {
  let horizontalEdge = "";
  for (let j = 1; j <= i; j++) {
    horizontalEdge += "* ";
  }
  console.log(horizontalEdge);
}