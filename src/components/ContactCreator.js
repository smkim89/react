import React from 'react';

class ContactCreator extends React.Component {
    constructor(props) {
        super(props);
        // Configure default state
        this.state = {
            name: "",
            phone: ""
        };
    }

// 인풋박스의 값을 변경 할 때 실행 될 handleChange(e) 메소드
// 여기서 파라미터 e 는 JavaScript 의 Event 인터페이스
    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
// handleClick() 에서는 parent 컴포넌트인 Contacts 에서 props 로 받아온 메소드를 실행.
// 그 후, 인풋 박스 값을 비운다.
    handleClick(){
        this.props.onInsert(this.state.name, this.state.phone);
        this.setState({
            name: "",
            phone: ""
        });
    }
// 인풋박스가 변경 될 때 해당 메소드를 실행한다는 의미. bind 를 통하여 컴포넌트의 this 에 접근 할 수 있게 된다.
    render() {
        return (
            <div>
                <p>
                <input type="text" name="name" placeholder="name" value={this.state.name}
                  onChange={this.handleChange.bind(this)}/>
                <input type="text" name="phone" placeholder="phone" value={this.state.phone}
                  onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleClick.bind(this)}>Insert</button>
                </p>
            </div>
        );
    }
}
export default ContactCreator;
