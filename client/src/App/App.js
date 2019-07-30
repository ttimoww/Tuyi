import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Homepage from './pages/homepage/Homepage';
import Dashboard from './pages/dashboard/Dashboard';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Register from './pages/Register/Register';
import './css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    return ( 
      <div className="app">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <PrivateRoute path="/dashboard" component={Dashboard} authenticated={true}/>
          <PrivateRoute path="/register" component={Register} authenticated={false} />
          <Route component={PageNotFound} />
        </Switch>
      </div>  
     );
  }
}
 
export default App;