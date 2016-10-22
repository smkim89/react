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
//propType validate default String isRequired는 필수값을 말함.
Content.propTypes = {
    title: React.PropTypes.string,
    body: React.PropTypes.string.isRequired
};

export default Content;
