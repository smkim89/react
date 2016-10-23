import React from 'react';
import Header from './Header';
import Content from './Content';
import State from './State';
import RandomNumber from './RandomNumber';

class App extends React.Component {
    sayHey(){
       alert("배고프고 배고프다 아아 배고파");
    }

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
                  <button onClick= {this.sayHey}>Click Me</button>
                  <p style = {pStyle}>{1 == 1 ? 'True' : 'False'}</p>
                  <RandomNumber number={this.state.value}
                                  onUpdate={this._updateValue} />
              </div>
          );
      }
}


export default App;
