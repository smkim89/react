import React from 'react';

class App extends React.Component {
  sayHey(){
       alert("배고프고 배고프다 아아 배고파");
    }
    render(){
          let text = "Dev-Server";

          let pStyle = {
              color: 'aqua',
              backgroundColor: 'black'
          };

          return  (
              <div>
                  <h1> Hello Velopert </h1>
                  <h2> Welcome to {text}</h2>
                  <button onClick= {this.sayHey}>Click Me</button>
                  <p style = {pStyle}>{1 == 1 ? 'True' : 'False'}</p>
              </div>
          );
      }
}

export default App;
