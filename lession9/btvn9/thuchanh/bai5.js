const num = [5,8,9,16,2,7,1,9,5,6,8,12,10,2,1,8,20,4,9,1]
let tongle = 0;

for(let number of num){
    if( number %2 !== 0){
        tongle += number
    }
}
console.log('tong so le trong mang la: ',tongle)