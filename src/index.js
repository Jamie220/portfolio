import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
//bootstrap need to import before index.css
import './style/index.scss';
import App from './containers/App';
import { PortfolioProvider } from './context'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<PortfolioProvider>
<App />
</PortfolioProvider>
, 
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
