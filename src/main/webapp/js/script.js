// String : 문자 데이터, '', ""
let myName = "이도연";
let email = 'ai.edu.kingsmile@gmail.com';
let comb = `반가워!! ${myName} !!!`;

// Number : 숫자 데이터
let number = 350;
let opacity = 1.57;

// Boolean : 참거짓
checked = true;
isShow = false;

// Undefined : 값이 할당되지 않은 상태를 나타냄
let undef;
let obj = { age: 33 };

let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

console.log("------------");
console.log(new Date('2022-03-13').getDay()); // 0, 일요일
console.log(new Date('2022-03-15').getDay()); // 2, 화요일
console.log(new Date('2022-03-18').getDay()); // 5, 금요일

console.log("------------");

let x = 999;
let y = 888;
const z = 0;

const hello = ['hi'];
var hello2 = "hi";

function sayHello() {
	let name = 'a';
	return name;
}

let name = 'gildong';
console.log(sayHello);