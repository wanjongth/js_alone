## 스택과 힙(메모리 공간)

저장을 할 때 사용하는 공간

### 스택(stack)

- 기본 자료형은 직접 들어간다.
- 복합 자료형은 그 주소가 들어간다.

### 힙(heap)

- 복합 자료형의 본체가 저장된다.

## 파괴적 처리, 비파괴적 처리

처리 후에

- 원본이 변경되었다 -> 파괴적 처리
- 원본이 변경되지 않았다 -> 비파괴적 처리

### 컴퓨터 사양의 제한(메모리 크기)가 적었을때는 파괴적 처리

- 문제점. 요청을 마무리 하지 않고 외부적인 영향으로 인해 멈췄을 경우 원본을 알 수 없다.

### 현대에 들어 컴퓨터 사양이 좋아짐에 따라 비파괴적 처리를 사용

## const의 제한

const -> 스택에 있는 값을 변경할 때 오류
-> 힙에 있는 레퍼런스된 복합 자료형을 조작하는 것에는 해당하지 않음.
ex)

```js
const a = [1, 2];
a.push(3); // 가능.
```

## js for문

### 배열 등과 함께 사용

```js
for (const 요소 of 배열) {
  console.log(요소);
}
for (const 인덱스 in 배열) {
  console.log(인덱스, 배열[인덱스]);
}
```

### 범용적 사용

i++, i-- -> i += 1, i-= 1

```js
for (let i = 0; i < 5; i++) {
  console.log(`{i}번째 반복`);
}
for (let i = 20; i >= 10; i--) {
  console.log(`{i}번째 반복`);
}
for (let i = 0; i < 배열.length; i++) {
  const element = 배열[i];
}
```

## js while 문(조건이 중요할 경우)

```js
let i = 0;
while (confirm("계속 진행하시겠습니까?")) {
  alert(`${i}번째 반복입니다.`);
  i++;
}
```

## js 함수

코드의 재사용. -> 더 나아가 추상화

### 프로시저 형태(매개변수 없음)

정의

```js
const f = function () {
  console.log("");
};
```

호출

```js
f();
```

### 수학적 함수(매개변수와 리턴값)

- 쓰는게 더 코드가 깔끔하고, 활용도가 높아서 쓴다.

f(x) = x + 5
정의

```js
const f = function (아무거나) {
  return 아무거나 + 5;
};
```

호출

```js
console.log(f(1));
```

### js에서의 함수

아래 function2의 함수는 다른 언어에서 주로 사용하는 방법. 물론 js도,
현대에 들어서는 function1의 방법을 주로 쓴다.

```js
// function 1 - 익명 함수
const f = function (매개변수, 매개변수) {
  return 리턴값;
};
// function 2 - 선언적 함수
function f(매개변수, 매개변수) {
  return 리턴값;
}
```

### 나머지 매개변수

```js
const 함수 = function (a, b, ...매개변수) {
  console.log(a, b, 매개변수);
};
// 자료형 -> 배열
```

### 전개 연산자

```js
const 함수 = function (a, b, c) {
  console.log(a, b, c);
};

const a = [1, 2, 3];
함수(a[0], a[1], a[2]);
함수(...a);
```

## 성능 vs 가독성

### 현대 -> 가독성

1. 기업 입장의 비용 절감 -> 저렴한 ...를 고용해도 코드를 이해할 수 있게
2. 프로그램이 너무 복잡해져서
3. 지원 도구의 다양화

### 이전 -> 성능

1. 비싼 컴퓨터
2. 몸값이 싼 ...

클린코드, 이펙티브 시리즈 .. 등

## 기본 매개변수

-> 윤년 예제에서 함수 호출 시
isLeapYear() // 올해가 윤년인지 알려준다는 선입견이 있을 수 있음.. (처음 알게 되었다.)
-> 입력하지 않았을 때 들어갈 매개변수를 지정해주는것

```js
const isLeapYear = function (year) {
  ...
}

const isLeapYear = function (year = new Date().getFullYear()) {
  ...
}
```

### 과거에는

매개변수 = '' 형식을 사용할 수 없었음.
if문으로 구현 or 삼항 연산자

```js
const isLeapYear = function (year) {
  if (typeof year === "undefined") {
    year = new Date().getFullYear();
  }
  //...

  year = typeof year === "undefined" ? new Date().getFullYear() : year;
  //...
};
```

## 콜백함수

forEach, filter, map..

### forEach

```js
for (const i in array) {
  console.log(i);
}

array.forEach(function (value, index, array) {
  console.log(index);
});

for (const i of array) {
  console.log(i);
}

array.forEach(function (value, index, array) {
  console.log(value);
});
```

### 화살표 함수

=>

```js
let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76];

// 홀수만 추출
numbers = numbers.filter((value) => value % 2 === 1);

// 100 이하의 수만 추출
numbers = numbers.filter((value) => value <= 1000);
```

## 타이머 함수

```js
const a = setTimeout(function () {
  // 특정한 시간 후에 한 번(밀리세컨드)
  console.log(); //실행문
}, 1000);

const b = setInterval(function () {
  console.log();
}, 1000); // 특정한 시간마다

console.log(a, b);

clearTimeout(); // 빠져 나옴
clearInterval(); // 빠져 나옴
```

## 즉시 호출 함수 - 충돌 피하는 용법

```js
(function () {
  const a = 10;
  console.log(a);
})();

const a = (function () {})()(() => {})();
```

## 엄격 모드

js는 유연한 언어이기 때문에 상수인지 변수인지 지정을 하지 않아도 코드가 실행되지만, 위험성을 내포하고 있기 때문에

```js
"use strict";
a = 10;
b = 10;
alert(a + ":" + b);
```

## 네임스페이스

js는 네임스페이스(namespace)라는 문법이 따로 없어서 이름 충돌이 쉽게 발생할 수 있음
그래서 이후에 활용하는 객체로 네임스페이스를 유사적으로 만들어 활용 -> 선언적 함수를 잘 사용하지 않음

```js
함수();

함수 = function () {
  console.log("익명 함수");
};

function 함수() {
  console.log("선언적 함수");
}

함수();
// 위에서의 문제,
// 선언적 함수가 먼저 만들어지고
// 익명함수가 나중에 실행됨
// 코드의 실행을 예측하기 힘들어짐
```

## js 객체

객체 내부에 있는 것들 - 속성
속성 내부의 함수 - 메서드

```js
const object = {
  name: "구름",
  age: 7,
  bark: function () {
    console.log(`${this.name}이/가 짖습니다!`); // 아래와 같음 (this 바인딩을 함), js에서는 객체 내부의 속성을 나타낼때 this 키워드를 꼭 사용할 것
    console.log(`${name}이/가 짖습니다!`);
  },
  sleep: () => {
    console.log(`${this.name}이/가 잡니다!`); // 화살표 함수에서는 다름 (this 바인딩을 하지 않음)
    console.log(`${name}이/가 잡니다!`);
  },
};

dog.bark;
```

## 객체 동적 속성 추가

객체도 배열과 마찬가지로 힙에 올라가기 때문에 const로 선언하더라도 지지고 볶고 가능

```js
// 정적 생성
const pet = {
  name: "구름",
  age: 8,
};
// 동적 생성
pet.color = "brown";
// 동적 제거
delete pet.color;
```

## 프로토 타입

기본 자료형은 메서드를 원래는 사용할 수 없음.
닷(.)을 찍으면 승급이 일어나 자주 사용하는 메서드는 등록되어 있음 ex) length

프로토 타입을 이용하면 사용할 메서드를 생성할 수 있음

```js
String.prototype.contain = function (다른문자열) {
  return this.indexOf(다른문자열) >= 0;
};

const a = "문자열";
console.log(`a.contain('문자'): ${a.contain("문자")}`);
a.contain();
```

## 객체 기본 속성 활용

```js
const dog = {
  name: "구름",
  age: 7,
  color: "갈색",
};
console.log(dog.status); // undefined
// 1)
dog.status = dog.status !== undefined ? dog.status : "이상 없음";
dog.status = dog.status === undefined ? "이상 없음" : dog.status;

// 2) dog.status 빈문자열 or 0 과 같이 false로 변환되는 값이 오지 않는다면,
dog.status = dog.status ? dog.status : "이상 없음";

// 3) 2번과 같음
dog.status = dog.status || "이상 없음";

// 현대
// 1) 전개 연산자 사용
new_dog = { status: "이상 없음", ...dog };

// 아래처럼 자주 사용, 아래처럼 하지 않으면, object.을 계속 불러줘야 함
const test = function (object) {
  const { name, age, color, status } = { status: "이상 없음", ...object };

  return `${name} : ${age} : ${color} : ${status}`;
};

// 2)
dog = function ({ name, age, color, status = "이상 없음" }) {
  return `${name} : ${age} : ${color} : ${status}`;
};

console.log(
  dog({
    name: "구름",
    age: 7,
    color: "갈색",
  })
);
```

## 외부 Library

### Lodash Library

cdn or files 사용

- 정렬 쉽게 가능(\_.sortBy)
- 집합처리, 배열처리 등

### Luxon - timezone 처리

### Handsontable - 스프레드 시트

### d3js - 데이터시각화, 간단하게는 chart.js
