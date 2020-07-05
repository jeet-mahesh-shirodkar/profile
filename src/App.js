import React from 'react';
import Home from './Components/Home/Home';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/work"  component={Work}/>
        <Route path="/contact"  component={Contact}/>
        <Redirect to="/"/>
      </Switch>
    </React.Fragment>
  );
}
export default App;
