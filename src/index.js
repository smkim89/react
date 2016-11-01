import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');

//props  왜안돼?
App.defaultProps = {
    headerTitle: '헤더',
    contentTitle: 'Title',
    contentBody: 'BodyContent'
};

ReactDOM.render(<App />, rootElement);
