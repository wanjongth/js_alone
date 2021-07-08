## DOM

Document Object Model
-> DOM

- DOMContentLoaded 이벤트
  html 파일의 Dom이 다 불러와지지 않았을 때, 문서 객체 조작을 가능하게 해주는 것
  document.addEventListener('DOMContentLoaded', () => {
  //문서 객체 조작 가능
  })

### 글자 조작

textContent
innerHTML

### 속성 조작

setAttribute('이름','값')
getAttribute('이름')
!표준에 있는 속성 - 그냥 입력

### 스타일 조작

style.backgroundColor
style['background-color']

### 타이머 관련 테크닉

```js
 document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('h2')
  header.textContent = '안녕하세요'

  const first = document.querySelector('.first')
  const second = document.querySelector('.second')

  const toFirst = () => {
    first.appendChild(header)
    setTimeout(toSecond, 1000)
  }
  const toSecond = () => {
    second.appendChild(header)
    setTimeout(toFirst, 1000)
  }
  toFirst()
```

```js
document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('h2')
  header.textContent = '안녕하세요'

  const first = document.querySelector('.first')
  const second = document.querySelector('.second')
  const arr = [first,second]

  let counter = 0
  const fun = () => {
      arr[counter%2].appendChild(header)
      counter++
  }
  setInterval(fun,1000)
  fun()
```

### 막기 이벤트(preventDefault)

블로그 등의 오른쪽 클릭 막기.
-> prevent.html
