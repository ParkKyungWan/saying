import React from 'react';
import './App.css';

//router
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

//components
import Main from './pages/Main/Main';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/profile"
                 render={ () => <Profile name=""/>}      
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;

//npm install @material-ui/icons