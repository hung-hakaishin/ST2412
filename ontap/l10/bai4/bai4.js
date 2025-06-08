//4. Cho bộ dữ liệu về users như sau: data.js
// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// -Đếm số lượng user có age > 50.
// -Đếm số lượng user đã kết hôn và chưa kết hôn.
// -Đếm số lượng user theo từng ngành nghề tương ứng.
//     Output:
//     {
//         "Dentist": 5,
//         "Developer": 13,
//         "Doctor": 6,
//         "Farmer": 8,
//         "Project Manager": 5,
//         "Teacher": 9,
//         "Worker" : 4
//     }


// console.log(users)





// // -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// let isExitUser1 = false

// const n = Number(prompt('nhap n: '))
// for (let user of users){
//     // console.log(user)
//     if(user.id === n){
//         isExitUser1 = true
//         console.log(user)
//     }
// }
// if(isExitUser1 === false){
//     console.log('khong tim thay ket qua')
// }



// // -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// let isExitUser2 = false

// const keyword = prompt('nhap keyword: ')
// for (let user of users){
//     const fullname = user.first_name + ' ' + user.last_name
    
//     if(fullname.toLowerCase().includes(keyword.toLowerCase)){
//         console.log(user.email)
//         isExitUser2 = true
//     }
// }
// if(isExitUser2 === false){
//     console.log('khong tim thay ket qua')
// }




// // -Đếm số lượng user có age > 50.
// let count1 = 0
// for(let user of users){
//     if(user.age > 50){
//         count1 = count1 + 1
//     }
// }
// console.log('so luong user > 50 la: ',count1)




// // -Đếm số lượng user đã kết hôn và chưa kết hôn.
// let count2 = 0;
// for (let user of users) {
// 	if (user.is_married) {
// 		count2 = count2 + 1;
// 	}
// }
// console.log('Số lượng người đã kết hôn là: ', count2);
// console.log('Số lượng người đã chưa kết hôn là: ', users.length - count2);




// -Đếm số lượng user theo từng ngành nghề tương ứng.
//     Output:
//     {
//         "Dentist": 5,
//         "Developer": 13,
//         "Doctor": 6,
//         "Farmer": 8,
//         "Project Manager": 5,
//         "Teacher": 9,
//         "Worker" : 4
//     }
const result = {}
for(let user of users){
    if(result.hasOwnProperty(user.job)){
        result[user.job] = result[user.job] + 1
    }
    else{
        result[user.job] = 1
    }
}
console.log(result)