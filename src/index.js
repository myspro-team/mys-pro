import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './components/pages/sections/redux/Store'
ReactDOM.render(<Router>
    <Provider store={store}>
    <App />
    </Provider>
    </Router>, document.getElementById('root'));
registerServiceWorker();
