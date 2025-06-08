function isValidDate(day, month, year) {
    // Kiểm tra điều kiện cơ bản
    if (year <= 0 || month < 1 || month > 12 || day < 1) {
        return false;
    }

    // Số ngày tối đa trong mỗi tháng
    const daysInMonth = [
        31, 
        (isLeapYear(year) ? 29 : 28),
        31, 
        30, 
        31, 
        30, 
        31, 
        31, 
        30, 
        31, 
        30, 
        31];

    // Kiểm tra ngày có hợp lệ so với tháng và năm không
    return day <= daysInMonth[month - 1];
}

// 📅 Hàm kiểm tra năm nhuận
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// 🔎 Ví dụ kiểm tra
console.log(isValidDate(29, 2, 2024));  // true (Năm nhuận)
console.log(isValidDate(31, 4, 2023));  // false (Tháng 4 chỉ có 30 ngày)
console.log(isValidDate(31, 12, 2023)); // true (Ngày cuối năm)
console.log(isValidDate(30, 2, 2023));  // false (Tháng 2 không nhuận)
console.log(isValidDate(15, 13, 2023)); // false (Tháng 13 không tồn tại)
