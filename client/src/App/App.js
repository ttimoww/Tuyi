import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Homepage from './pages/homepage/Homepage';
import Dashboard from './pages/dashboard/Dashboard';
import Page404 from './pages/404/Page404';
import Registerpage from './pages/registerpage/Registerpage';
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
          <PrivateRoute path="/register" component={Registerpage} authenticated={false} />
          <Route component={Page404} />
        </Switch>
      </div>  
     );
  }
}
 
export default App;