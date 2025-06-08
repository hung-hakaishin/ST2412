const items = document.getElementsByClassName('favorite-list-item');
for (let item of items) {
    item.innerHTML = 'I love this thing';
    item.style.color = 'red';
}

const content = prompt('nhap text: ')
const newitem = document.createElement('li');
newitem.innerText = content;
document.querySelector('#favorite-list').appendChild(newitem);
