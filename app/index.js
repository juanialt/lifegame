import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(<App store={store}/>, document.getElementById('app'));
