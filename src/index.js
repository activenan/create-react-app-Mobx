import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Routes from './router/router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
