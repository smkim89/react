import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');

App.defaultProps = {
    headerTitle: '헤더',
    contentTitle: '내용 타이틀',
    contentBody: '내용 바디'
};

ReactDOM.render(<App />, rootElement);
