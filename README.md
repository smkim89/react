# react study
It’s what the cool kids use nowadays man, you know, Functional programming? High order functions? Currying? Pure functions?
=============================
## 1. 과정
### 1.1. 뻘짓하는 과정
        1. 테스트 환경구축을 해야함.
        2. 기존에 클럽플 만들면서 익숙해진 노드js 사용하기로함.
        3. 가능하면 모듈 매니저를 통해 번들로 묶어서 파일 하나만 로드하고자 함.
        4. CommonJS에 정의된 파일들의 의존성을 통해 파일을 묶어서 브라우저에서 실행될 수 있게~
        5. 위에 말한 webpack, browserify 브라우저를 위한 모듈 관리자이면서 동시에 태스크 러너 같은 것 webpack 사용하기로함.
        6. npm 설정하는데 폴더 권한이 없으니 node가 날아가버림. 삽질좀 했음.
        7. 덕분에 LTS 버전올리고 득이된거같음 ㅎㅎ.
### 1.2. Browserify, webpack
        1. 많은 사람들이 npm 레지스트리에 의존성을 올려뒀기 때문에 생김.
        2. npm 이란건 존잘러들이 코드랑 의존성을 묶어서 모듈로 배포하는 짱짱 큰 공개 리포지터리
        3. 왜 이딴게 생겼냐면 자바스크립트 런타임 영역이 서버환경까지 가버렸기 때문임
        4. server-side script와 client-side script가 문법적 차이가 조금씩? 있는데
        5. 그자식들 같이 쓰기 위해서임
        6. Browserify 는 Node.js 의 Module API 를 그대로 사용하기 때문에, 일단 node 코드로 작성하고
        나중에 browserify 로 컴파일만 해주면 node 와 browser 환경에서 둘다 실행됌.
### 1.3. 설정 과정
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
### 3.2 Props
        1. 컴포넌트에서 사용 할 데이터 중 변동되지 않는 데이터를 다룰 때 사용
        2. parent 컴포넌트에서 child 컴포넌트로 데이터를 전할 때 사용한다.
        3. 컴포넌트에서 immutable (변하지 않는)  데이터가 필요 할 땐, render() 메소드의 내부에 안에 { this.props.propsName } 형식으로 넣고,컴포넌트를 사용 할 때, < > 괄호 안에 propsName="value" 를 넣어 값을 설정
        4. Type Validate 컴포넌트 에서 원하는 props 의 Type 과 전달 된 props 의 Type 이 일치하지 않을 때 콘솔에서 오류 메시지를 나타낼수 있음.
        5. Prop은 외부로부터 값을 지정받기 때문에 validation이 필요.

### 3.3 state
        1. 컴포넌트에서 유동적인 데이터를 다룰 때, state 를 사용함.
        2. Prop은 외부에서 전달하는 값이지 그 컴포넌트가 자체적으로 관리하는 값이 아니므로 내부에서 변경하면 안 됨.
        컴포넌트가 관리할 필요가 있는 값은 State로 정의.
        3. state를 사용하는 컴포넌트의 갯수를 최소화 하는 것이 중요함
        4. 10 개의 컴포넌트에서 유동적인 데이터를 사용 하게 될 땐, 각 데이터에 state를 사용 할 게 아니라,
         props 를 사용하고 10 개의 컴포넌트를 포함시키는 container 컴포넌트를 사용하는것이 효율적
        5. RandomNumber의 경우 첫 constructor에서 ramdom한 value값을 세팅한다.
        그리고 버튼을 클릭(컴포넌트) -> props(부모)의 onUpdate를 실행하여 데이터를 리로드 한다.
        6. State 클래스는 React.Component 클래스를 상속함. super 함수는, 상속받은 부모패런트의 생성자 메소드를 실행시켜줌.
        React 컴포넌트가 생성될때, 생성자의 인수로는 props 가 있기 때문에,
        그대로 전달해주어서 React 컴포넌트의 생성자를 먼저 실행하고 정의한 클래스의 생성자를 실행하는것

****
