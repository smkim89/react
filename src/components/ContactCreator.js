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

    handleChange(e){
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleClick(){
        this.props.onInsert(this.state.name, this.state.phone);
        this.setState({
            name: "",
            phone: ""
        });
    }

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
