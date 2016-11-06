import React from 'react';
import Header from './Header';
import Content from './Content';
import State from './State';
import RandomNumber from './RandomNumber';
import Contacts from './Contacts';
import ContactCreator from './ContactCreator';

class App extends React.Component {
    sayHey(){
       alert("배고프고 배고프다 아아 배고파");
    }

    sayArray(){
      let numbers = [1, 2, 3, 4, 5];
      alert(numbers.map((num) => {return num*num}));
    }


    /*
    기본적으로 핸들러로 호출되는 람다함수(익명함수)들의 this는 전역객체(window)이기 때문에
    타이머라든지 이밴트 핸들러의 콜백함수로 호출이될때도 특정 객체와 연결하여 this를 유지 하고싶을때 bind 함수로 해결할수 있다.

    bind함수는 실행 될때의 함수를 특정객체의 범위에 묶어버리는 것이다.
    쉽게 말하면 bind는 함수 내의 this를 변경 시키려는 것이 목적이다.

    ex : fun.bind(object,arg1,....argn)

    자바스크립트는 function도 객체이기 때문에 .bind메서드 사용이 가능하며
    function prototype 멤버로 bind메서드가 존재한다.
    ie는 9 이상부터 지원
    ECMAScript 5에서 추가되었다.

    함수선언문이아닌 표현식함수(익명함수)에만 바인딩할수 있다.
    */

    constructor(props){
          super(props);

          this.state = {
              value: Math.round(Math.random()*100)
          };

          this._updateValue = this._updateValue.bind(this);
      }

      _updateValue(randomValue){
          this.setState({
              value: randomValue
          });
      }
    render(){
          let text = "간단한데 배가 고픈게 문제야";

          let pStyle = {
              color: 'aqua',
              backgroundColor: 'black'
          };

          return  (
              <div>
                  <Header title={ this.props.headerTitle }/>
                  <Content title={ this.props.contentTitle }
                            body={ this.props.contentBody }/>
                  <State />
                  <h1> Hello Velopert </h1>
                  <h2> 지금상태는 {text}</h2>
                  <button onClick= {this.sayArray}>Click Me</button>
                  <p style = {pStyle}>{1 == 1 ? 'True' : 'False'}</p>
                  <RandomNumber number={this.state.value}
                                  onUpdate={this._updateValue} />

                  <Contacts/>
              </div>
          );
      }
}


export default App;
