import React from 'react';


class Content extends React.Component {
    render(){
        return (
            <div>
              <h2>{ this.props.title }</h2>
              <p> { this.props.body } </p>
            </div>
        );
    }
}

export default Content;
