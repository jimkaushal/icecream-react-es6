import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ListTiles from './components/tiles_list.component'
import NotFound from './components/notfound.component'
import Header from './components/header.component'

const routing = (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/tilesList" component={ListTiles} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
