//day32_2.js

// 호이스팅(Hoisting) : 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

//화살표(Arrow) 함수(Function)(람다)
const double = function(x){
   return x*2
}

console.log('double : ', double(7))

/*const doubleArrow = (x) => {
   return x*2
}*/

// const doubleArrow = (x) => x*2
// const doubleArrow = x => [1,2,3]
const doubleArrow = x => ({name : 'kingsmile'})
console.log('doubleArrow : ' , doubleArrow(3))



const mul = function(x,y) {
   return x*y
}

const mulArrow = (x,y) => x*y

console.log('mul : ', mul(3,4))
console.log('mulArrow : ', mulArrow(8,6))

const show = function() {return "show!!"}
const showArrow = () => "showArrow!!"

console.log('show : ', show()) 
console.log('showArrow : ', showArrow()) 
// 함수

function sub(){
   console.log(arguments)
   return arguments[0]
}

console.log(sub(7,3))

const hap = function(x,y) { // 함수정의
   if(x<2){
      return
   }
   return x+y
}

console.log('hap = ' + hap(100,200))
console.log('hap = ' + hap(1,200))

function plus(x,y){
   return x+y
}

const d = plus(2,3)
const e = plus(12,13)


console.log(d)
console.log(e)
console.log(d + e)

function sum(x,y){
   console.log(x+y);
}

sum(10,2)
sum(3,2)

// 형 변환(Type Conversion)
// Truthy(참하고 같은 값) - true, {}, [], 1,2, 'false', -12, '12.34',...


// Falsy(거짓하고 같은 값)
// false, '',null, undefined, 0, -0, NaN

const b = 1
const c = '1'


console.log(b == c)

// 변수 유효범위 - var(함수레벨), let(블럭레벨), const(블럭레벨)

/*function scop(){ //함수 정의
   if(true){
      const a = 123
      //console.log(a)
   }
   console.log(a)
}*/

function scop(){ //함수 정의
   if(true){
      let a = 123
      console.log(a)
   }
   //console.log(a)
}

function scop(){ //함수 정의
   if(true){
      var a = 123
      console.log(a)
   }
   console.log(a)
}

scop(); // 함수호출 
//var x;
//console.log(x);