/**
 * Bài 1
inputA = prompt("Nhập số A (A ≤ 100): ");
A = Number(inputA);
if (A <= 100) {
    console.log(2 * A);
} else {
    console.log("Vui lòng nhập số A nhỏ hơn hoặc bằng 100.");
}
*/




/**
 * Bài 2
inputNumbers = prompt("Nhập ba số A, B, C cách nhau 1 dấu cách: ");
numbers = inputNumbers.split(' ');
A = Number(numbers[0]);
B = Number(numbers[1]);
C = Number(numbers[2]);
console.log((A - B) * C);
*/




/**
 * Bài 3
inputChar = prompt("Nhập ký tự là một chữ cái hoa: ");
if (inputChar >= 'A' && inputChar <= 'Z') {
    if (inputChar === 'A') {
        console.log('a');
    } else if (inputChar === 'B') {
        console.log('b');
    } else if (inputChar === 'C') {
        console.log('c');
    } else if (inputChar === 'D') {
        console.log('d');
    } else if (inputChar === 'E') {
        console.log('e');
    } else if (inputChar === 'F') {
        console.log('f');
    } else if (inputChar === 'G') {
        console.log('g');
    } else if (inputChar === 'H') {
        console.log('h');
    } else if (inputChar === 'I') {
        console.log('i');
    } else if (inputChar === 'J') {
        console.log('j');
    } else if (inputChar === 'K') {
        console.log('k');
    } else if (inputChar === 'L') {
        console.log('l');
    } else if (inputChar === 'M') {
        console.log('m');
    } else if (inputChar === 'N') {
        console.log('n');
    } else if (inputChar === 'O') {
        console.log('o');
    } else if (inputChar === 'P') {
        console.log('p');
    } else if (inputChar === 'Q') {
        console.log('q');
    } else if (inputChar === 'R') {
        console.log('r');
    } else if (inputChar === 'S') {
        console.log('s');
    } else if (inputChar === 'T') {
        console.log('t');
    } else if (inputChar === 'U') {
        console.log('u');
    } else if (inputChar === 'V') {
        console.log('v');
    } else if (inputChar === 'W') {
        console.log('w');
    } else if (inputChar === 'X') {
        console.log('x');
    } else if (inputChar === 'Y') {
        console.log('y');
    } else if (inputChar === 'Z') {
        console.log('z');
    }
} else {
    console.log("Vui lòng nhập một ký tự là chữ cái hoa.");
}
*/





/**
 * Bài 4
let N = Number(prompt("Nhập số nguyên N (N ≤ 50): "));
if (N <= 50) {
    let count = 0;
    for (let i = (N - 1) / 2 + 1; i <= N; i++) {
        count++;
    }
    console.log(count);
} else {
    console.log("Vui lòng nhập N nhỏ hơn hoặc bằng 50.");
}
*/





/**
 * Bài 5
let N = Number(prompt("Nhập số nguyên N (N < 15): "));
if (N < 15) {
    let count = 0;
    for (let i = N + 1; i <= N; i++) {
        count++;
    }
    console.log(count);
} else {
    console.log("Vui lòng nhập N nhỏ hơn 15.");
}
*/





/**
 * Bài 6
let input = prompt("Nhập hai số nguyên A, B cách nhau 1 dấu cách (A < 1000, B ≤ 1000): ");
let numbers = input.split(' ').map(Number);
let A = numbers[0];
let B = numbers[1];

if (A < 1000 && B <= 1000) {
    let result = A + B + (A * B);
    console.log(result);
} else {
    console.log("Vui lòng đảm bảo A < 1000 và B ≤ 1000.");
}
 */





/**
 * Bài 7
let Z = prompt("Nhập một chuỗi ký tự Z viết liền không dấu: ");
let reversedZ = Z.split('').reverse().join('');
console.log(reversedZ);
 */





/**
 * Bài 8
let char = prompt("Nhập vào một ký tự là chữ cái thường: ");
if (char >= 'a' && char <= 'z') {
    let upperChar = '';
    if (char === 'a') upperChar = 'A';
    else if (char === 'b') upperChar = 'B';
    else if (char === 'c') upperChar = 'C';
    else if (char === 'd') upperChar = 'D';
    else if (char === 'e') upperChar = 'E';
    else if (char === 'f') upperChar = 'F';
    else if (char === 'g') upperChar = 'G';
    else if (char === 'h') upperChar = 'H';
    else if (char === 'i') upperChar = 'I';
    else if (char === 'j') upperChar = 'J';
    else if (char === 'k') upperChar = 'K';
    else if (char === 'l') upperChar = 'L';
    else if (char === 'm') upperChar = 'M';
    else if (char === 'n') upperChar = 'N';
    else if (char === 'o') upperChar = 'O';
    else if (char === 'p') upperChar = 'P';
    else if (char === 'q') upperChar = 'Q';
    else if (char === 'r') upperChar = 'R';
    else if (char === 's') upperChar = 'S';
    else if (char === 't') upperChar = 'T';
    else if (char === 'u') upperChar = 'U';
    else if (char === 'v') upperChar = 'V';
    else if (char === 'w') upperChar = 'W';
    else if (char === 'x') upperChar = 'X';
    else if (char === 'y') upperChar = 'Y';
    else if (char === 'z') upperChar = 'Z';
    
    console.log(upperChar);
} else {
    console.log("Vui lòng nhập một ký tự là chữ cái thường.");
}
 */





/**
 * Bài 9
let inputChar = prompt("Nhập một chữ cái thường: ");
let N = Number(prompt("Nhập số N (N < 10): "));

if (inputChar >= 'a' && inputChar <= 'z' && N < 10) {
    let index = 0;
    for (let i = 0; i < 26; i++) {
        if ('abcdefghijklmnopqrstuvwxyz'[i] === inputChar) {
            index = i;
            break;
        }
    }

    let newIndex = (index + N) % 26; // Phép toán modulo để quay vòng
    let newChar = 'abcdefghijklmnopqrstuvwxyz'[newIndex]; 
    console.log(newChar);
} else {
    console.log("Vui lòng nhập một ký tự là chữ cái thường và N nhỏ hơn 10.");
}
 */





/**
 * Bài 10
let upperChar = prompt("Nhập vào một chữ cái A hoa: ");

if (upperChar >= 'A' && upperChar <= 'Z') {

    let nextChar = '';

    if (upperChar === 'A') nextChar = 'b';
    else if (upperChar === 'B') nextChar = 'c';
    else if (upperChar === 'C') nextChar = 'd';
    else if (upperChar === 'D') nextChar = 'e';
    else if (upperChar === 'E') nextChar = 'f';
    else if (upperChar === 'F') nextChar = 'g';
    else if (upperChar === 'G') nextChar = 'h';
    else if (upperChar === 'H') nextChar = 'i';
    else if (upperChar === 'I') nextChar = 'j';
    else if (upperChar === 'J') nextChar = 'k';
    else if (upperChar === 'K') nextChar = 'l';
    else if (upperChar === 'L') nextChar = 'm';
    else if (upperChar === 'M') nextChar = 'n';
    else if (upperChar === 'N') nextChar = 'o';
    else if (upperChar === 'O') nextChar = 'p';
    else if (upperChar === 'P') nextChar = 'q';
    else if (upperChar === 'Q') nextChar = 'r';
    else if (upperChar === 'R') nextChar = 's';
    else if (upperChar === 'S') nextChar = 't';
    else if (upperChar === 'T') nextChar = 'u';
    else if (upperChar === 'U') nextChar = 'v';
    else if (upperChar === 'V') nextChar = 'w';
    else if (upperChar === 'W') nextChar = 'x';
    else if (upperChar === 'X') nextChar = 'y';
    else if (upperChar === 'Y') nextChar = ''; 
    else if (upperChar === 'Z') nextChar = 'b'; 

    if (nextChar !== '') {
        console.log("Chữ cái thường đứng sau là: " + nextChar);
    } else {
        console.log("Không có chữ cái thường nào đứng sau ký tự 'Y'.");
    }
} else {
    console.log("Vui lòng nhập một ký tự là chữ cái in hoa.");
}
 */