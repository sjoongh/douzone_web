
// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout() : 설정된 Timeout함수를 종료
// clearInterval() : 설정된 Interval 함수를 종료

// 콜백(Callback) : 함수의 인수로 사용되는 함수
// setTimeout(함수, 시간)

setTimeout(function() {
	console.log('hello');
}, 3000);

const h1El = document.querySelector('h1')

h1El.addEventListener('click', () => {
	clearTimeout(timer);
})

// function
function sub(x, y) {
	console.log('sub length : ' + sub.length);
	return arguments[0];
}

console.log(sub(7, 3, 10));
console.log(sub());