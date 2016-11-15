import React from 'react';
class ContactEditor extends React.Component {
    constructor(props) {
        super(props);
        // Configure default state
        this.state = {
            name: "",
            phone: ""
        };
    }

    // 제   ContactEditor 에서 선택된 Contact의 값을 받아와서 렌더링해줘야겠죠?
    //
    // 하지만, 인풋박스의 value 부분은 유동적이기에 그 부분에 { this.props.contact.name } 을 할 수는 없습니다.
    //
    // prop값이 바뀔 때마다 state를 업데이트 해줄 필요가 있는데요, 이는 Component Lifecycle API 중 하나인
    //
    // componentWillReceiveProps()를 사용하면됩니다. 이 컴포넌트 내장메소드는, prop 값을 받게 될 때 실행되는 메소드입니다.


    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.contact.name,
            phone: nextProps.contact.phone
        });
    }

    handleClick(){
        if(!this.props.isSelected){
            console.log("contact not selected");

            return;
        }

        this.props.onEdit(this.state.name, this.state.phone);
    }

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}/>

                    <input type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleClick.bind(this)}>
                    Edit
                    </button>
                </p>
            </div>
        );
    }
}

export default ContactEditor;
