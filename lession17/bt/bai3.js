function findMostFrequent(arr) {
    let frequency = {}; // Đối tượng lưu số lần xuất hiện
    let maxCount = 0;   // Số lần xuất hiện nhiều nhất
    let mostFrequent;   // Phần tử xuất hiện nhiều nhất

    // Duyệt qua mảng và đếm số lần xuất hiện
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;

        // Cập nhật giá trị xuất hiện nhiều nhất
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequent = num;
        }
    }

    return { mostFrequent, maxCount };
}

// Kiểm tra
console.log(findMostFrequent([1, 2, 3, 5, 4, 2, 6, 4, 4])); 
// Output: { mostFrequent: 4, maxCount: 3 }
