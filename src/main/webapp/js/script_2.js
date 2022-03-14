// 객체 데이터
const doyeon = {
	name:'도연',
	age: 33,
	// 메소드
	getName: function() {
		return this.name;
	}
}

const herName = doyeon.getName();
console.log(herName);

/*
class Point {
	int x;
	
	public int getX() { return x; };
	public void setX(int x) { this.x = x };
}*/

// 익명 함수
let world = function() {
	
}
// 기명 함수
function helloFunc() {
	console.log(1004);
}

helloFunc();

function returnFunc() {
	return 1005;
}

let result = returnFunc();
console.log(result);

// 예약어
// let this = 'doyeon'; --> error

// 값(데이터)의 재할당 불가
const x = 10;
// x = 9999; // error

// 변수 선언
let a = 1;
let b = 5;

// Array : 배열 데이터
// 여러 데이터를 순차적으로 저장
// let user = [1,2,3,4];
// Object : 객체 데이터
// 여러 데이터를 key: value 형태로 저장한다. { }
let user = {
	// key: value
	name: 'Yuna',
	age : 80,
	isValue : true
}

console.log(user.name);
console.log(user.age);