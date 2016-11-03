import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');

//props
App.defaultProps = {
    headerTitle: '오늘의 주제는 배열의 UPDATE, INSERT입니당',
    contentTitle: '이것은 무엇인가',
    contentBody: '참 신기한 것입니다'
};

ReactDOM.render(<App />, rootElement);
