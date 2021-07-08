document.addEventListener('DOMContentLoaded', () => {
    // 태그 선택자
    const h1 = document.querySelector('h1')
    h1.style.color = 'red'
    // 아이디 선택자
    document.querySelector('#header').style.backgroundColor = 'orange'
    // 클래스 선택자
    document.querySelector('.center.head').style.textAlgin = 'center'
    // 속성 선택자
    document.querySelector('[type=text]').style.borderRadius = '10px'
    // 후손 선택자
    document.querySelector('body input').style.backgroundColor = 'blue'

    // 여러개의 선택자 선택하기 -> querySelectoerAll
    for (const element of document.querySelectorAll('input')) {
        element.style.backgroundColor = 'red'
    }

    //문서 객체 조작
    const header1 = document.querySelector('#textContent')
    const header2 = document.querySelector('#innerHTML')

    // 값 추출
    console.log(header1.textContent)
    console.log(header2.innerHTML)

    // 삽입 -> html 태그 포함
    header1.textContent = '원하는<br>문자열'
    header1.innerHTML = '원하는<br>문자열'

    const img = document.querySelector('img')
    // 값을 넣는 행위
    img.setAttribute('src', 'http://placekitten.com/200/200')
    // 값을 추출하는 행위
    console.log(img.getAttribute('src'))

    // 
    const divs = document.querySelectorAll('div')
    divs.forEach((div, key) => { // key는 인덱스
        div.style.backgroundColor = `rgb(${key * 25},${key * 25},${key * 25})`
        //div.style['background-color']
        div.style.height = '10px'
    })

    // 문서 객체 생성, 제거
    const header = document.createElement('h1')
    header.textContent = 'createElement로 만든 태그'
    header.style.color = 'red'

    const body = document.querySelector('body')
    body.appendChild(header)
    setTimeout(() => {
        //body.removeChild(header) // 삭제
        header.parentNode.removeChild(header)
    }, 2000)

})
