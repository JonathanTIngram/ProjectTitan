
import React from 'react';
import './App.css';
import Navbar from './components/General/Navbar';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Main from './pages/main';
import Historical from './pages/historical';
import Graph from './pages/graph';
import Andon from './pages/andon';
import Weather from './pages/weather';
import Attraction from './pages/attraction';
import Banner from './components/General/Bannerbar';
import newAttraction from './pages/newAttraction';
import Edit from './pages/editpage';
import Create from './pages/createpage';
import Delete from './pages/deletepage';
import Interval from './pages/interval';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Banner />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/main' component={Main} />
        <Route path='/historical' component={Historical} />
        <Route path='/graph' component={Graph} />
        <Route path='/andon' component={Andon} />
        <Route path='/weather' component={Weather} />
        <Route path='/attraction' component={Attraction} />
        <Route path='/newAttraction' component={newAttraction} />
        <Route path='/editpage' component={Edit} />
        <Route path='/createpage' component={Create} />
        <Route path='/deletepage' component={Delete} />
        <Route path='/interval' component={Interval} />
      </Switch>

    </Router>
    </>
  );
}

export default App;
