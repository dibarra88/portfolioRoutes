import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap.css';
import './styles/bootstrap-grid.css';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';

ReactDOM.render(
    <Router>
        <BaseLayout>
            <Switch>
                <Route path="/Home" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Portfolio" component={Portfolio} />
                <Route exact path="/" component={App} />
            </Switch>
        </BaseLayout>
    </Router>

    , document.getElementById('root'));
registerServiceWorker();
