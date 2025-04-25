/* Bài 1
let number = Number(prompt("Nhập một số:"));
let result = (number % 2 === 0) ? "Là số chẵn" : "Là số lẻ";
alert(result);
*/





/* Bài 2
let number1 = Number(prompt("Nhập số thứ nhất:"));
let number2 = Number(prompt("Nhập số thứ hai:"));
if (number1 > number2) {
    alert(number1 + " lớn hơn " + number2);
} else if (number1 < number2) {
    alert(number2 + " lớn hơn " + number1);
} else {
    alert("Hai số bằng nhau");
}
*/





/*Bài 3
let age = Number(prompt("Nhập tuổi của bạn:"));
alert(age >= 18 ? "Bạn đủ tuổi để đi thi" : "Bạn chưa đủ tuổi để đi thi");
*/





/*Bài 4
let averageScore = Number(prompt("Nhập điểm trung bình:"));
let result;
if (averageScore >= 8.0) {
    result = "Giỏi";
} else if (averageScore >= 6.5) {
    result = "Khá";
} else if (averageScore >= 5.0) {
    result = "Trung bình";
} else {
    result = "Yếu";
}
alert("Xếp loại: " + result);
*/





/*Bài 5
let year = Number(prompt("Nhập năm:"));
let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
alert(isLeap ? year + " là năm nhuận" : year + " không phải là năm nhuận");
*/





/*Bài 6
let number = Number(prompt("Nhập một số:"));
if (number > 0) {
    alert("Đây là số dương");
} else if (number < 0) {
    alert("Đây là số âm");
} else {
    alert("Đây là số 0");
}
*/





/*Bài 7
let consumption = Number(prompt("Nhập số điện đã dùng (kWh):"));
let bill = (consumption <= 50) ? (consumption * 1000) : (50 * 1000 + (consumption - 50) * 1200);
alert("Tiền điện: " + bill + "đ");
*/





/*Bài 8
let password = prompt("Nhập mật khẩu:");
alert(password === "123456" ? "Đăng nhập thành công" : "Sai mật khẩu");
*/





/*Bài 9
let number = Number(prompt("Nhập một số:"));
alert((number >= 10 && number <= 100) ? "Số nằm trong khoảng 10 đến 100" : "Số không nằm trong khoảng 10 đến 100");
*/





/*Bài 10
let number1 = Number(prompt("Nhập số thứ nhất:"));
let operator = prompt("Nhập phép toán (+, -, *, /):");
let number2 = Number(prompt("Nhập số thứ hai:"));
let result;

if (operator === '+') {
    result = number1 + number2;
} else if (operator === '-') {
    result = number1 - number2;
} else if (operator === '*') {
    result = number1 * number2;
} else if (operator === '/') {
    if (number2 !== 0) {
        result = number1 / number2;
    } else {
        alert("Không thể chia cho 0");
    }
} else {
    alert("Phép toán không hợp lệ");
}

if (result !== undefined) {
    alert("Kết quả: " + result);
}
*/