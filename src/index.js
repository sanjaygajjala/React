import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'
import Registerformtable from './components/Registerformtable'
import Loginpage from './components/Loginpage'
import RegisterForm from './components/RegisterForm'
import * as serviceWorker from './serviceWorker';
const routing = (
    <Router>
      <div>
      <Switch> 
        <Route exact path="/" component={App} />
       
        <Route exact  path="/loginpage" component={Loginpage} />
        <Route exact  path="/register" component={ Registerformtable} />
        <Route exact  path="/register-form" component={ RegisterForm} />
       
        </Switch>
      </div>
    </Router>
  )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
