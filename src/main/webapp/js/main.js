const a = 'Hello~';
// split : 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse : 배열 뒤집기
// join : 배열을 인수 기준으로 문자로 병합해 반환.

const b = a.split().reverse().join(); // 메소드 체이닝

console.log(b);

// HTML요소(element) 1개 검색/찾기
const boxEl = document.querySelector('.box');

// HTML요소 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

// 찾은 요소를 반복해서 함수 실행
boxEls.forEach(function() {
	boxEl.classList.add(`order-${index + 1}`);
	console.log(index, boxEl);
});

console.log("=======새로운 값 얻어오기/세팅========");
// HTML요소(element) 1개 검색/찾기
const boxEl = document.querySelector('.box');
// console.log(boxEl);
console.log(boxEI.textContent);
boxEl.textContent = 'Happy Virus';

// HTML 요소에 적용할 수 있는 요소들
boxEl.addEventListener();
// 인수 추가 가능

const boxEI = document.querySelector('box');
console.log(boxEI);
// HTML 요소에 적용할 수 있는 메소드
boxEI.addEventListener();
// 인수(Arguments)를 추가 가능
// boxEI.addEventListener(1,2); // 인수 2개
boxEI.addEventListener('click', function() {
	console.log('click');
	// alert('Click~~~');
	boxEI.classList('active');
});