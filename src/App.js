import React from 'react'
import Login from './Login/Login'
import DataTrainPage from './DataTrainPage/DataTrainPage';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import RecognitionPage from './RecognitionPage/RecognitionPage';
import AdminPanel from './AdminPanel/AdminPage';
class App extends React.Component{
  state = {
    loggedIn: false
  }

  setLogin = () => {
    this.setState({
      loggedIn: true
    })
  }
  setLogout = () => {
    console.log('here')
    this.setState({
      loggedIn: false
    })
  }
  render(){
    return(
      <div>
        {this.state.loggedIn ? 
        

        <Router>
          <div>
          <Route exact path="/" render={() => <AdminPanel logout={() => this.setLogout()} />} />
            <Route exact path="/recognition" render={() => <RecognitionPage logout={() => this.setLogout()} /> } />
            <Route exact path="/register" render={() => <DataTrainPage logout={() => this.setLogout()} /> } />
            <Route exact path="/admin" render={() => <AdminPanel logout={() => this.setLogout()} />} />
          </div>
        </Router>

        :

        <Login setLogin={() => this.setLogin()}/>
        }
      </div>
    )
  }
}
export default App;