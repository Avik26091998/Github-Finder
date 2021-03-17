import React, { Fragment, Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/layouts/Navbar'
import UserItem from './components/users/UserItem'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layouts/Alert'
import About from './components/pages/About'
import User from './components/users/User'
import './App.css';

class App extends Component {

    state = {
      users : [],
      user: {},
      repos: [],
      loading: true,
      alert: null
    }


       async componentDidMount() {
       this.setState({ loading: false })
       const res = await axios.get('https://api.github.com/users')
       this.setState({ users: res.data })
     }
    
    async searchUser(text) {
      
      const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
      this.setState({ users: res.data.items, loading: false })
    }

    async getUser(username){
      
      const res = await axios.get(`https://api.github.com/users/${username}`)
      this.setState({ user: res.data, loading: false })
    }

    async getRepos(username){
      
      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`)
      this.setState({ repos: res.data, loading: false })
    }

    async clearUser(){

      this.setState({ users: [], loading: true })
    }

    setAlert = (msg, type) => {
      
      this.setState({ alert: {msg, type} })
      setTimeout(() => this.setState({ alert: null }), 3000)
    }

    render() {
      return (
        <Router>
          <div className="App">
            <Navbar title="Github Finder" icon="fab fa-github" />
              <div className="container">
                <Alert alert={ this.state.alert }/>
                <Switch>
                  <Route exact path='/' render={ props => (
                    <Fragment>
                     <Search searchUser={ this.searchUser.bind(this) } 
                       clearUser={this.clearUser.bind(this)} 
                       usersLength={ this.state.users.length }
                       setAlert={ this.setAlert.bind(this) } 
                       />
                     <Users users = { this.state.users } loading = { this.state.loading } />
                   </Fragment>
                  )} />
                  <Route exact path="/about" component={ About } />
                  <Route exact path="/user/:login" render={ props => (
                    <User {...props} getUser={ this.getUser.bind(this) } user={ this.state.user } loading={ this.state.loading } getRepos={ this.getRepos.bind(this) } repos={ this.state.repos }/>
                  )} />
                </Switch>
              </div>
          </div>
        </Router>
      );
    }
}

export default App;
