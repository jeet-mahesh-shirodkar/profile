import React from 'react';
import Home from './Components/Home/Home';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Header from './Components/Header/Navbar';
import About from './Components/About/About';
import './App.css';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/work"  component={Work}/>
        <Route path="/contact"  component={Contact}/>
        <Route path="/about"  component={About}/>
        <Redirect to="/"/>
      </Switch>
      <div className="footerText">
        <p>© 2020 Portfolio</p>
        <h6>Developed by 🤓</h6>
      </div>
      <Footer/>
    </React.Fragment>
  );
}
export default App;
