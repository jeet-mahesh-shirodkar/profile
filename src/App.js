import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './Components/Home/Home';
import Work from './Components/Work/Work';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config2.js';
import Header2 from './Components/Header/Navbar2';
import 'semantic-ui-css/semantic.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';

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
    <React.Fragment>
      <Helmet>
        <title>Jeet Mahesh Shirodkar| Profile</title>
        <meta
            name="description"
            content="Jeet Mahesh Shirodkar | Jeet Shirodkar profile page github portfolio website"
          />
        <meta name="keywords" 
              content="Jeet Mahesh Shirodkar | Jeet Shirodkar profile page github portfolio website"
          />
      </Helmet>
      <Particles>
        <h1 className="headerText"><span role="img" aria-label="Wave">👋</span></h1>
      </Particles>
      <Header2/>
      <Switch>
        <Route exact path="/">{<Redirect to="/profile"/>}</Route>
        <Route exact path="/profile" component={Home}/>
        <Route exact path="/profile/work"  component={Work}/>
        {/* <Route exact path="/profile/contact"  component={Contact}/> */}
        <Route exact path="/profile/about"  component={About}/>
      </Switch>
      <Particles>
      <div className="footerText">
        <p>© 2021 Jeet</p>
        <h6><span role="img" aria-label="SideEyes">😏</span></h6>
      </div>
      </Particles>
     <Footer/>
    </React.Fragment>
  );
}

export default App;
