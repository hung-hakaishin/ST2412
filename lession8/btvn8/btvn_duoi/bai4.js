let s = prompt('nhap chuoi s: ')
let l = prompt('nhao so l: ')
l = Number(l)

while(s.length < l){
    s += 'a';
}  

console.log(s)