import './css/bootstrap.min.css';
import '../node_modules/devicons/css/devicons.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter as Router, 
    Route, 
    Switch
} from 'react-router-dom';

// redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

// compiled less into css import
import './index.css';

// static routes
import Header from './components/header/Header';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Login from './routes/Login';
import NoMatch from './routes/NoMatch';
import Footer from './components/footer/Footer';

// containers
import Projects from './containers/Projects';
import Project from './containers/Project';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <div className="site-wrapper">
                <Header />
                <main>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/work/:id" component={Project} />
                        <Route path="/work" component={Projects} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/login" component={Login} onAuth={this.setAuth} />
                        <Route path="/" component={Home} />
                        <Route component={NoMatch} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    </Provider>
    , document.getElementById('root')
);
