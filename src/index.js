import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');

//props
App.defaultProps = {
    headerTitle: '헤더',
    contentTitle: 'Title',
    contentBody: 'BodyContent'
};

ReactDOM.render(<App />, rootElement);
