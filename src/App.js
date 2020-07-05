import React from 'react';
import Home from './Components/Home/Home';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from './Components/Header/Navbar';

const App = () => {
  return (
    <React.Fragment>
      <Header/>
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
