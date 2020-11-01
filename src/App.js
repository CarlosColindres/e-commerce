import {Homepage} from './pages/Homepage'
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/ShopPage';
import Header from './header/Header';
import SinInPage from './pages/SinInPage';
import React from 'react'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
class App extends React.Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
          )
        })
      }
      
      this.setState({currentUser: userAuth})

    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SinInPage}/>
        </Switch>
      </div>
    );

  }
  
}

export default App;
