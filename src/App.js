import React from 'react';
import Home from './Components/Home/Home';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Header from './Components/Header/Navbar';
import About from './Components/About/About';
import './App.css';
import Footer from './Components/Footer/Footer';
import 'semantic-ui-css/semantic.min.css';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config2.js';
import Header2 from './Components/Header/Navbar2';
// import Particles from 'react-particles-js';

function Particles({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  );
}

const App = () => {
  return (
    <React.Fragment className="App">
      <Particles>
        <h1 className="headerText">👋</h1>
      </Particles>
      <Header2/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/work"  component={Work}/>
        <Route path="/contact"  component={Contact}/>
        <Route path="/about"  component={About}/>
        <Redirect to="/"/>
      </Switch>
      <Particles>
      <div className="footerText">
        <p>© 2020 Jeet</p>
        <h6>😏</h6>
      </div>
      </Particles>
     <Footer/>
    </React.Fragment>
  );
}

export default App;
