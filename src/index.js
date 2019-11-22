import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DataTrainPage from './DataTrainPage/DataTrainPage';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import RecognitionPage from './RecognitionPage/RecognitionPage';
import AdminPanel from './AdminPanel/AdminPage';

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

const routing = (
    <Router>
      <div>
      <Route exact path="/" component={App} />
        <Route exact path="/recognition" component={RecognitionPage} />
        <Route exact path="/register" component={DataTrainPage} />
        <Route exact path="/admin/:name" component={AdminPanel} />
        <Route exact path="/project" component={App} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

//ReactDOM.render(<App />, document.getElementById('root'));
