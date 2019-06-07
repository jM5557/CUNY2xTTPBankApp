import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';

import Debits from './components/Debits';
import Credits from './components/Credits';


class App extends Component {

  constructor() {
    super();

    this.state = {

      currentUser: {

        userName: 'bob_loblaw',
        memberSince: '08/23/99'

      },

      credits: [],
      debits: []
    }


    this.updateCredits = this.updateCredits.bind(this);
    this.updateDebits = this.updateDebits.bind(this);
    this.mockLogIn = this.mockLogIn.bind(this);
  }

  componentDidMount () {

    axios.get('https://moj-api.herokuapp.com/debits')
      .then( (res) => {

        this.setState({
          debits: res.data
        });


      })
      .catch( err => { console.log(err) } );

    axios.get('https://moj-api.herokuapp.com/credits')
      .then( (res) => {

        this.setState({
          credits: res.data
        });

      })
      .catch( err => { console.log(err) } );
  }

  updateDebits (deb) {

    this.setState({

      debits: deb

    });

  }

  updateCredits (cred) {

    this.setState({

      credits: cred

    });
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render () {

    const HomeComponent = () => (

      <Home credits = { this.state.credits } debits = { this.state.debits } />

    );

    const UserProfileComponent = () => (

      <UserProfile 

        userName = { this.state.currentUser.userName }
        memberSince = { this.state.currentUser.memberSince }

      />
    

    );

    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>);

    const DebitsComponent = () => (<Debits updateDebits = { this.updateDebits } debits = {this.state.debits} />);

    const CreditsComponent = () => (<Credits updateCredits = { this.updateCredits } credits = {this.state.credits} />);

    return (
      <div className="app-content">
        
        <header className="app">

          <div>Bank of React</div>

        </header>

        <div className = "inner-content">
          

          <Router>

            <div>

              <header>

                <h1>Bank of React</h1>

                <Link to="/">Home</Link>
                <Link to="/userProfile">User Profile</Link>
                <Link to="/login">Log In</Link>

                <Link to="/debits">Debits</Link>
                <Link to="/credits">Credits</Link>

              </header>



              <Route exact path = "/" render = { HomeComponent } />

              <Route exact path="/userProfile" render={ UserProfileComponent } />

              <Route exact path="/login" render={ LogInComponent } />

              <Route exact path="/debits" render = { DebitsComponent } />

              <Route exact path="/credits" render = { CreditsComponent } />

            </div>

          </Router>


        </div>

      </div>
    );

  }

}

export default App;
