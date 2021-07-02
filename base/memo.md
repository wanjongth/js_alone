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

forEach, filter, map

### 화살표 함수

=>
