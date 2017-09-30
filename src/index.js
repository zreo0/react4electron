import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
// import createRoutes from './routers.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route exact path="/" component={App} />
		</div>
	</BrowserRouter>
	, document.getElementById('root')
);
registerServiceWorker();
