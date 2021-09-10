import './reset.css';

import React from 'react';
import ReactDom from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { myroutes } from './myroutes'
import { store } from './store'

import { App } from './App';


ReactDom.render(

    <Provider store={store}>
        <Router>
            <Switch>
                {myroutes.map((route, idx) => <Route {...route} key={idx} />)}
            </Switch>
        </Router>
    </Provider>
    ,
    document.getElementById('app')
);