/*
    산술연산자

    = 대입
    + 더하기
    - 빼기
    * 곱하기
    / 나누기
    % 나머지
    ** 거듭제곱

    자바스크립트의 연산은 사칙 연산의 방식을 대부분 따름
    + , - 연산자만 있을 때 왼쪽에서 오른쪽 순으로 연산

*/

number = 12 % 5;
console.log(number); // 나머지 2 출력

number = 10 % 5;
console.log(number); // 나머지 0 출력

number = 1 % 5;
console.log(number); // 나머지 1 출력

number = 4 % 4;
console.log(number); // 나머지 0 출력

number = 6 % 7;
console.log(number); // 나머지 6 출력

number = 0 % 3;
console.log(number); // 나머지 0 출력

number = 4 % 3 + 1;
console.log(number); // 나머지 1 + 1 = 2 출력

number = 5 + 6 % 4;
console.log(number); // 5 + 나머지2 = 7 출력

number = (10 + 2) % 3;
console.log(number); // 나머지 0 출력

number = 5 * (16 % 4);
console.log(number); // 5 * 나머지 0 = 0 출력

number = (9 % 8) + 3 ** 2;
console.log(number);  // 나머지 1 + 9 = 10 출력


