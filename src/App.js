import React, {Component} from 'react';
import './App.css';
import Home from './home/home';
import Leaderboard from './leaderboard/leaderboard';
import Temp from './temp/temp';
import Welcome from './welcome/welcome';
import Login from './login/login';
import PlayGame from './playGame/playGame';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

/**
 * Main all component
 */
class App extends Component {

  /**
   * Class constructor function
   */
  constructor() {
    super();

    this.state = {
      openNav: localStorage.getItem('openNav')
    };
  }

  /**
   * Compoennt mounted
   */
  componentDidMount() {
    const self = this;
    window.onkeyup = function(e) {
      const key = e.keyCode ? e.keyCode : e.which;

      if (key === 219) {
        localStorage.setItem('openNav', true);
        self.setState({openNav: true});
      } else if (key === 221) {
        localStorage.setItem('openNav', false);
        self.setState({openNav: false});
      }
    };
  }

  /**
   * Render function
   * @return {element} JSX
   */
  render() {
    return (
      <Router>
        <div className='app-body'>
          {
            this.state.openNav && (
              <div className='nav collapsed'>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/leaderboard'>Leaderboard</Link></li>
                  <li><Link to='/temp'>Temp</Link></li>
                  <li><Link to='/welcome'>Welcome</Link></li>
                </ul>
                <ul>
                  <li><Link to='/login'>Login</Link></li>
                  <li><Link to='/playgame'>PlayGame</Link></li>
                </ul>
              </div>
            )
          }
          <Route exact path='/' component={Home} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/temp' component={Temp} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/login' component={Login} />
          <Route path='/playgame' component={PlayGame} />
        </div>
      </Router>
    );
  }
};

export default App;
