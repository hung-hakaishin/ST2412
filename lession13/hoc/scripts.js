// setTimeout(function() {
//     console.log('HOC is ready!');
// }, 5000);

// console.log('a')
// setTimeout(function() {
//     console.log('b')
// }, 0);
// console.log('c')




// setTimeout(function() {
//     console.log('4')
// }, 4000);

// setTimeout(function() {
//     console.log('3')
// }, 3000);

// setTimeout(function() {
//     console.log('2')
// }, 2000);

// setTimeout(function() {
//     console.log('1')
// }, 1000);


// const testPromise = new Promise((resolved, reject) => {
//     const number = 10;
//     setTimeout(() => {
//         if (number >= 10){
//             resolved(number);
//         }
//         else{
//             reject(new Error('Có lỗi xảy ra'));
//         }
//     }, 2000);
// });

// testPromise
// .then(function(data){
//     console.log('Promise chạy thành công', data);
// })
// .catch(function(error){
//     console.log('Promise chạy thất bại', error);
// })
// .finally(function(){ 
//     console.log('Promise kết thúc');
// });
// .finally(() => { 
//     console.log('Promise kết thúc');
// });



// function getValue(){
//     return 10;
// }
// console.log(getValue());
// async function getValue(){
//     return 10;
// }
// const value = getValue();
// console.log(value);




function testPromise () {
    return new Promise((resolved, reject) => {
        const number = 9;
        setTimeout( function() {
            if (number >= 10){
                resolved(number);
            }
            else{
                reject('Có lỗi xảy ra');
            }
        }, 2000);
    });
}
async function getPromise(){
    try {
        const result = await testPromise(); 
        console.log('Kết quả:', result);
    } catch (error) {
        console.log('Lỗi:', error);
    } finally {
        console.log('Kết thúc');
    }
    console.log('dong tiep theo');
}
getPromise();





// console.log('a')
// const PI = 3.14;
// console.log(PI);

// try{
//     PI = 10;
// }
// catch(error){
//     console.log('Lỗi:', error);
// }

// console.log(b);







