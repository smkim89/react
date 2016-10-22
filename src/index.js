import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');

//props
App.defaultProps = {
    headerTitle: '헤더',
    contentTitle: 3,
    contentBody: undefined
};

ReactDOM.render(<App />, rootElement);
