import React from 'react';
import {render} from 'react-dom';
import './css/index.css';
import Routes from './router/router';
import registerServiceWorker from './registerServiceWorker';
import './model/practiseModel'

render(<Routes />, document.getElementById('root'));
registerServiceWorker();
