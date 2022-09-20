// 상수 constant number : 변하지 않는 값

// const 키워드 선언
//**** 반드시 선언과 동시에 대입 **** 
//const apple;
apple = 1000; // 키워드 없이 작성하면 변수(var)로 인식
console.log(apple);

const orange = 2000; // 상수 선언과 동시에 대입
/*
orange = 3000; // type error 재할당 불가능
const orange = 3000; // type error 재선언 불가능
*/
console.log(orange);
