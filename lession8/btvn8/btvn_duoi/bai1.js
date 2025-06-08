let sum = 0
for (number = -10; number <= 50; number ++){
    if(number % 2 === 0){
        console.log(sum);
        sum = sum + number;
    }
}
console.log(sum)