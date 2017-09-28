import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import createRoutes from './routers.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router history={hashHistory} routes={createRoutes} />, document.getElementById('root'));
registerServiceWorker();
