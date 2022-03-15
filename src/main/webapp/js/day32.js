import random from './getRandom';



//  형변환
const b = 1
const c = '1'

console.log(123);

for (let i =0; i < 3; i+= 1) {
	const li = document.createElement('li');
	li.textContent = `사과${i+1}`;
	ulEl.appendChild(li);
}

// 찾은 요소를 반복해서 함수 실행
boxEls.forEach(function(boxEl, index) {
	console.log(index, boxEl);
	boxEl.classList.add(`order${index+1}`);
}) 