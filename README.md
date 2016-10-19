# react study 한번 해볼까함
=============================
## 1. 과정
### 1.1. 뻘짓하는 과정
        1. 테스트 환경구축을 해야함.
        2. 기존에 클럽플 만들면서 익숙해진 노드js 사용하기로함.
        3. nodejs 환경에서 react 사용하는 방법에는 webpack, browserify가 있음.
        4. webpack 사용하기로함.
        5. npm 설정하는데 폴더 권한이 없으니 node가 날아가버림. 삽질좀 했음.
        6. 덕분에 LTS 버전올리고 득이된거같음 ㅎㅎ.
### 1.2. 설정 과정
        1. babel ES6, ES2016+ 지원하지 않을때를 대비해서 집어넣었음.
        2. webpack 모듈 번들러로 사용을 함. js 관리차원에서 사용함.
        3. webpack-dev-server – wepback에서 지원하는 간단한 개발서버임 테스트할때 편함.
        4. bundle.js는 다른 웹서버 같은경우 webpack으로 먼저 빌드해야함.
        5. webpack-dev-server 가 실행될때 자동으로 빌드되서 메모리에 저장되고
        6. /bundle.js 에 요청을 주었을때 public 안에 있는 파일이 아닌 메모리에 있는 파일을 반환.


## 2. JSX
### 2.1. JSX?
        1. 간단하게 JSX는 자바스크립트 문법을 확장하는 거 XML처럼. DOM을 표현하는 다른 방식.
        2. 2016년에 직접 HTML을 다루는 사람은 없을 거라고 생각됌.
        3. Type-safe 하며 컴파일링 과정에서 에러를 감지 할 수 있음.
        4. 컴파일링 되면서 최적화 되서 빠름. 리엑트쓰는이유. 빠르니까
        5. 솔직히 JSX안쓸꺼면 리엑트의미없음.
        6. html, jsx의 중요한 차이점을 보려면 JSX gotchas 참조해보기 바람.

### 2.2 설명
        1. import 는 ES6 에 도입된 새로운 문법인데, var React = require(‘react’) 와 같음.
        2. 참고로 var React = require(‘react’)는 commonjs문법임 차후에 기회되면 서술해야지
        3. React 모듈은 Component를 만들때 사용됌. react에서 어찌보면 가장 중요한 거.
        4. class 개념 역시 ES6 에 새로 도입된 요소중 하나인데
        5. ES5 에서 클래스를 만들때는 메소드들을 nest 할 수 없고 prototype을 사용했어야 했는데 많이편해졌음.
        6. render() 메소드에서는 컴포넌트에 렌더링 될 데이타를 정의함
        7. return 안에 있는게 가장 중요한 부분임. React JSX 는 XML-like Syntax를
           native Javascript로 변환함. 즉 JSX는 EcmaScript로 치환되는 간단한 치환/확장 언어
        8. 컴포넌트에서 여러 Element 를 렌더링 해야 할 때, 그 element들을 필수적으로
           container element 안에 포함시켜줘야 함.div element 를 wrapper 로 사용
        9. JSX 안에서, JavaScript 표현을 사용하는 방법은 간단함. 그냥 { } 로 wrapping 하면 됌.
        10. let은 var랑 비슷함 var 변수의 scope는 기본적으로 함수 단위인데 let 은 블럭 범위 내에서 변수를 선언

## 3. Component
### 3.1. Component?
        1. react에서 왜 컴포넌트 단위로 나눠놨는지에대해 생각해봐야함.
        2. react 자체가 view컨트롤 라이브러리임 컴포넌트 단위로 재사용성이 높아지는 의미가 있음.
      

****
