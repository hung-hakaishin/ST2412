let randomNumber = Math.floor() * 10 * 2;
randomNumber = Math.floor(randomNumber)

let answer = null;
for(let count = 1; true; count++) {
    answer = prompt('nhap cau tra loi: ')
    answer = Number(answer)

    if( answer === randomNumber){
        alert('doan dung')
        break;
    }
    else{
        alert('doan sai')
    }
}