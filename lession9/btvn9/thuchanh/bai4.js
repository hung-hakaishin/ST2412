
const growth = [
    [5,8,9,16], // n1
    [2,7,1,9], //n2
    [5,6,8,12], //n3
    [10,2,1,8], //n4
    [20,4,9,1]  //n5
]


//-Tạo mảng mới gồm các phần tử có giá trị là trung bình tăng trưởng của từng năm (Tính trung bình theo hàng).
const avggr = []
for(let data of growth){
    console.log(data)

    let sum = 0
    for(let element of data){
        let sum = 0
        sum += element
    }
    const avg = sum/data.length
    avggr.push(avg)
}
console.log(avggr)

//-Tìm giá trị tăng trưởng trung bình theo năm lớn nhất.
let maxgr = avggr[0]
for (let element of avggr){
    if(element > maxgr){
        maxgr = element
    }
}
console.log(maxgr)


// -Tìm giá trị tăng trưởng theo quý lớn nhất.
let max = growth[0][0]
for(let datarow of growth){
    for(datacol of datarow){
        if(datacol > max){
            max = datacol
        }
    }
}
console.log(max)


// -Tính giá trị tăng trưởng trung bình theo quý của các năm (Tính trung bình theo cột).
const avg =[]
for(let i = 0; i < growth[0].length; i++){
    for(let j = 0; j < growth.length; j++){
        console.log(growth[j][i])
        sum += growth[j][i]
    }
    avg.push(sum/rows)
}
console.log(avg)

