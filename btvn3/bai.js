/**
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEven = numbers.reduce((sum, num) => {
  if (num % 2 === 0) {
    return sum + num;
  }
  return sum;
}, 0);

console.log("Tổng các số chẵn:", sumEven);
 */





/**
const students = [
  { name: "An", score: 8 },
  { name: "Bình", score: 9 },
  { name: "Châu", score: 7 }
];

const highestScoreStudent = students.reduce((maxStudent, currentStudent) => {
  return currentStudent.score > maxStudent.score ? currentStudent : maxStudent;
}, students[0]);

console.log("Học sinh có điểm cao nhất:", highestScoreStudent);
 */





/**
const products = [
  { name: "Sách", quantity: 3 },
  { name: "Bút", quantity: 0 },
  { name: "Thước", quantity: 5 }
];

const inStockProducts = products.filter(product => product.quantity > 0);

console.log("Sản phẩm còn hàng:", inStockProducts);
 */





/**
const items = ["cam", "xoài", "cam", "ổi", "cam"];

const countOccurrences = (arr, element) => {
  return arr.reduce((count, item) => (item === element ? count + 1 : count), 0);
};

const camCount = countOccurrences(items, "cam");
console.log("Số lần xuất hiện của 'cam':", camCount);
 */





/**
const students = [
  { name: "An", score: 7 },
  { name: "Bình", score: 8 },
  { name: "Châu", score: 9 }
];

const totalScore = students.reduce((sum, student) => sum + student.score, 0);
const averageScore = totalScore / students.length;

console.log("Điểm trung bình của các học sinh:", averageScore);
 */

length



/**
const students = [
  { name: "An", score: 7 },
  { name: "Bình", score: 9 },
  { name: "Châu", score: 10 }
];

const topStudents = students.filter(student => student.score > 8).map(student => student.name);

console.log("Học sinh có điểm trên 8:", topStudents);
 */





/**
const numbers = [10, 20, 30];

const objectWithIndexKeys = numbers.reduce((obj, num, index) => {
  obj[index] = num;
  return obj;
}, {});

console.log("Object với key là index:", objectWithIndexKeys);
 */





/**
const cart = [
  { name: "Sách", price: 100, quantity: 2 },
  { name: "Bút", price: 10, quantity: 10 }
];

const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);

console.log("Tổng tiền các sản phẩm:", totalPrice); // Kết quả: 100*2 + 10*10 = 200 + 100 = 300
 */





/**
const students = [
  { name: "An", score: 7 },
  { name: "Bình", score: 4 },
  { name: "Châu", score: 9 }
];

const hasStudentBelow5 = students.some(student => student.score < 5);

console.log("Có học sinh điểm dưới 5 không?", hasStudentBelow5);
 */





/**
const students = [
  { name: "An", score: 7 },
  { name: "Bình", score: 4 },
  { name: "Châu", score: 9 }
];

const result = students.map(student => {
  return {
    name: student.name,
    status: student.score >= 5 ? 'Đậu' : 'Rớt'
  };
});

console.log(result);
 */