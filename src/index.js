import "./css/bootstrap.min.css";
import "../node_modules/devicons/css/devicons.min.css";
import "../node_modules/font-awesome/css/font-awesome.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

// compiled less into css import
import "./index.css";

// static routes
import Header from "./components/header/Header";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import NoMatch from "./routes/NoMatch";
import Footer from "./components/footer/Footer";

// containers
import Projects from "./containers/Projects";
import Project from "./containers/Project";
import Login from "./containers/Login";
import CreateAccount from "./containers/CreateAccount";
import Portal from "./containers/Portal";

// loading
import Loading from './components/Loading';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div className="site-wrapper">
        <Header />
        <Loading>
          <main>
            <Switch>
              <Route path="/portal" component={Portal} />
              <Route path="/about" component={About} />
              <Route path="/work/:id" component={Project} />
              <Route path="/work" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/create-account" component={CreateAccount} />
              <Route path="/login" component={Login} />
              <Route path="/" component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </main>
        </Loading>
        <Footer />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
