// if(typeof Storage !== "undefined") {
//     alert('trinh duyet ho tro localStorage');
// }
// else {
//     alert('trinh duyet khong ho tro localStorage');
// }


// //localStorage


// // c: create
// //cach1
// localStorage.setItem('PI', 3.14);
// //cach2
// localStorage.name = 'Nguyen Van A';
// localStorage['age'] = '20';

// //vidu
// const student = {
//     name: 'Nguyen Van B',
//     age: 21
// }
// localStorage.student = JSON.stringify(student);



// // r: read
// //cach1: su dung ham getItem
// const PI = localStorage.getItem('PI');

// // cach2: thao tac giong nhu voi object
// const name = localStorage.getItem('name');
// let studentSaved = localStorage.getItem('student');
// studentSaved = JSON.parse(studentSaved);

// console.log(PI)
// console.log(name)
// console.log(studentSaved)
// console.log(studentSaved.name)


// // u: update
// localStorage.setItem('PI', 100);

// // d: delete
// //cach1: xoa theo key
// localStorage.removeItem('name');
// //cach2: thao tac giong nhu voi object
// delete localStorage.age;

// //xoa toan bo
// localStorage.clear();


// //sessionStorage
// sessionStorage.setItem('key', 'value');


//cookie
// document.cookie = 'username = T3H'
// document.cookie = 'address = Ha Noi'

// const value = document.cookie;
// console.log(value)


// viet ham lay gia tri cua cookie
function getValueCookie(key){
    let value = document.cookie;

    value = value.split(';');

    for(let element of value){
        element = element.trim(); // loai bo khoang trang du thua o dau chuoi va cuoi chuoi
        element = element.split('=');
        if(element[0] === key){
            return element[1];
        }
    }
    return null;
}
getValueCookie()
console.log(getValueCookie('username'))
console.log(getValueCookie('address'))


