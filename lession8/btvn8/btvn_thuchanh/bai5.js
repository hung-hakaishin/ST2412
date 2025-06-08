let A = prompt('Nhap A:')
A = Number(A)
let B = prompt('Nhap B:')
B = Number(B)

if(A >= B){
    alert('gia tri dau vao chua hop le')
}
else{
    let X = prompt('Nhap X:')
    X = Number(X)

    for(let i = A + 1; i < B; i++){
        if(i % X === 0){
            console.log(i);
            break;
        }
    }
}