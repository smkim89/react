import React from 'react';


class Validation extends React.Component {
    /* ... */
}

Content.propTypes = {

    React.PropTypes.array           // 배열
    React.PropTypes.bool.isRequired // Boolean, 필수
    React.PropTypes.func            // 함수
    React.PropTypes.number          // 정수
    React.PropTypes.object          // 객체
    React.PropTypes.string          // 문자열
    React.PropTypes.node            // Render가 가능한 객체
    React.PropTypes.element         // React Element
    React.PropTypes.instanceOf(XXX) // XXX의 instance
    React.PropTypes.oneOf(['foo', 'bar']) // foo 또는 bar
    React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]) // 문자열 또는 배열
    React.PropTypes.arrayOf(React.PropTypes.string)  // 문자열을 원소로 가지는 배열
    React.PropTypes.objectOf(React.PropTypes.string) // 문자열을 값으로 가지는 객체
    React.PropTypes.shape({                          // 지정된 형식을 충족하는지
    color: React.PropTypes.string,
    fontSize: React.PropTypes.number
    });
    React.PropTypes.any.isRequired  // 어떤 타입이든 가능하지만 필수

    // 커스텀 제약도 정의 가능
    customPropType: function(props, propName, componentName) {
        if (!/^[0-9]/.test(props[propName])) {
          return new Error('Validation failed!');
        }
    }
};
/* ... */

export default ValidationExample;
