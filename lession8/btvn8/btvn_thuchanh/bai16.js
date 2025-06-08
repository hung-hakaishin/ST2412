let w = Number(prompt("can nang: "))
let h = Number(prompt("chieu cao: "))

const BMI = w / (h * h);

if (BMI < 18.5){
    console.log('nhe can')
}
else if (18.5 <= BMI && BMI < 23){
    console.log('binh thuong')
}
else if (23 <= BMI && BMI < 25){
    console.log('thua can')
}
else{
    console.log('beo phi')
}
