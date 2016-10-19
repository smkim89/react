import React from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
  sayHey(){
       alert("배고프고 배고프다 아아 배고파");
    }
    render(){
          let text = "간단한데 배가 고픈게 문제야";

          let pStyle = {
              color: 'aqua',
              backgroundColor: 'black'
          };

          return  (
              <div>
                  <Header/>
                  <Content/>
                  <h1> Hello Velopert </h1>
                  <h2> 지금상태는 {text}</h2>
                  <button onClick= {this.sayHey}>Click Me</button>
                  <p style = {pStyle}>{1 == 1 ? 'True' : 'False'}</p>
              </div>
          );
      }
}


export default App;
