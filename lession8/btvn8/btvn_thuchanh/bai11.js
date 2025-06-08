const NUMBER_RANDOM = Math.floor(Math.random() * 10 * 2 + 1);
let count = 5;
let numberInput;
for (let i = 1; i <= count; i++) {
  numberInput = Number(prompt("Số bạn dự đoán là: "));
  if (numberInput === NUMBER_RANDOM) {
    alert("Đoán đúng");
    break;
  } else {
    alert("Đoán sai");
  }
}