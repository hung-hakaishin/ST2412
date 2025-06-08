const arr = [10, 4, -7, 9, 100, 3, -21, 0, 33];

let min = []
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log('phan tu nho nhat la', min);


let max = []
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
console.log('phan tu lon nhat la:', max);



let sum = 0
for(let i = 0; i < arr.length; i++){
    sum += arr[i]
}
const ave = sum / arr.length
console.log('trung binh cong cua cac phan tu la: ', ave)



for(let i = 0; i < arr.length; i++){
    if( arr[i] % 3 === 0){
        console.log(arr[i])
        break;
    }
}










const numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
let mi = numbers[0]
let ma = numbers[0]

for(let number of numbers){
    if(numbers < min){
        mi = number
    }
    if(ma > number){
        ma = number
    }
}
console.log(mi)
console.log(ma)



let su = 0;
for(let number of numbers){
    sum += number
}
console.log(su)


const avg = sum / numbers.length
console.log(avg)



for (let number of numbers){
    if(number % 3 === 0){
        console.log(numbers)
        break
    }
}



for (let number of numbers) {
    if (number <= 1) {
      console.log(number, " không phải số nguyên tố");
    } 
    else {
      let count = 0;

      for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
          count++;
        }
      }
  

      
      if (count === 2) {
        console.log(number, " là số nguyên tố");
      } 
      else {
        console.log(number, " không phải số nguyên tố");
      }
    }
}