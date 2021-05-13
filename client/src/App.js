import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Main from './pages/main';
import Historical from './pages/historical';
import Graph from './pages/graph';
import Andon from './pages/andon';
import Weather from './pages/weather';
import Attraction from './pages/attraction';
import newAttraction from './pages/newAttraction';
import Edit from './pages/editpage';
import Create from './pages/createpage';
import Delete from './pages/deletepage';
import Interval from './pages/interval';
import RideInfo from './pages/rideInfo';
import React, { Component } from 'react';
import Login from './pages/login';
import fire from './fire';
import Logout from './pages/logout';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
  return (
    <>
    <Router>
      
    { this.state.user ? (  <Switch>
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
        <Route path='/rideInfo' component={RideInfo} />
        <Route path='/logout' component={Logout}/>
      </Switch> ) : ( <Login /> ) }
    </Router>
    </>
  );
}
}

export default App;