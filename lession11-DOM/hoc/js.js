// // tim kiem 1 phan tu trong html bang id
// const taghtmlwithid = document.getElementById('heading');
// console.log(taghtmlwithid);
// // chỉ trả về 1 phần tử đầu tiên nếu có nhiều phần tử trùng id thì chỉ trả về phần tử đầu tiên

// // tim kiem 1 phan tu trong html bang ten the
// const h1 = document.getElementsByTagName('h1');
// console.log(h1);
// // trả về 1 mảng chứa các phần tử có tên thẻ h1

// // tim kiem 1 phan tu trong html bang ten class
// const classct= document.getElementsByClassName('content');
// console.log(classct);
// // trả về 1 mảng chứa các phần tử có tên class heading 

// // tim kiem 1 phan tu ket hop nhieu yeu to
// const tag = document.querySelector('h2#heading');
// console.log(tag);
// // trả về phần tử h2 có id là heading

// const input = document.querySelector('input[type="text"]');
// console.log(input);
// // trả về phần tử input có type là text






const h1 = document.getElementById('heading');
// thay doi noi dung ben trong phan tu
h1.innerHTML = 'Hello';

// h1.innerHTML = '<a href="https://google.com">Hello</a>';



// thay doi dung van ban ben trong element ---  textContent se coi tat ca la text
const h2 = document.querySelector('h2#heading');
h2.textContent = 'xin chao the gioi';

// h2.textContent = '<a href="https://google.com">Hello</a>';



// thay doi gia tri cua thuoc tinh
const tagA = document.getElementById('tagA');
tagA.href = 'https://vnexpress.net';

const youtube = document.getElementById('youtube');
youtube.setAttribute('href', 'https:vnexpress.net');
// setAttribute('ten thuoc tinh', 'gia tri thuoc tinh'); dung duoc cho tat ca cac thuoc tinh



// thay doi style
h2.style.color = 'red';
h2.style.fontSize = '50px';




// tao moi 1 phan tu
const newH3 = document.createElement('h3');
newH3.innerText = 'the h3 vua duoc tao 1';
// them vao cuoi body
document.body.appendChild(newH3);
// appendChild: them 1 phan tu vao cuoi phan tu cha

document.getElementById('div1').appendChild(newH3);
newH3.innerText = 'the h3 vua duoc tao 2';

// xoa 1 phan tu
h1.remove();



document.getElementById('div1').classList.add('test');
// them class cho 1 phan tu
document.getElementById('div1').classList.remove('test');
// xoa class cho 1 phan tu
document.getElementById('div1').classList.toggle('test-toggle');
// neu co class thi xoa, neu khong co thi them vao




// event
function testOnClick() {
    alert('su kien click duoc kich hoat');
}

document.querySelector('.content').onclick = testOnClick;
// khi click vao phan tu co class content thi se thuc hien ham testOnClick

// document.querySelector('#favorite-list').onclick = function() {    
//     alert('su kien duoc kich hoat');
// }

document.getElementById('btn').addEventListener('click', function() {    
    alert('su kien duoc kich hoat');
});
// addEventListener('ten su kien', function() { code xu ly su kien });

document.getElementById('text').onchange = function() {
    console.log('su kien change duoc kich hoat');
}
// su kien change xay ra khi gia tri cua input thay doi

document.getElementById('text').oninput = function() {  
    console.log('su kien input duoc kich hoat');
}     