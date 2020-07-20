import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './containers/Home'; 
import Login from './containers/Login';
import TeacherSignup from './containers/TeacherSignup';
import StudentSignup from './containers/StudentSignup'; 
import Profile from './containers/Profile';

import Layout from './hocs/Layout';

import NotFound from './components/NotFound';

const App = () => {
  return(
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/signup/teacher" component={TeacherSignup} />
            <Route exact path="/signup/student" component={StudentSignup} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/profile' component={Profile} />
            <Route component = {NotFound} />
          </Switch>
        </Layout>
      </Router>
  )
};

export default App;