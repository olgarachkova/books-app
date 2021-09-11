import './reset.css';

import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { myroutes } from './myroutes'
import { store } from './store'

import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { ContentBox } from 'components/ContentBox'


ReactDom.render(
    <Provider store={store}>
        <Router>
            <Header />
            <ContentBox>
                <Switch>
                    {myroutes.map((route, idx) => <Route {...route} key={`route-${idx}`} />)}
                </Switch>
            </ContentBox>
            <Footer />
        </Router>
    </Provider>
    ,
    document.getElementById('app')
);