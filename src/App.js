import {Homepage} from './pages/Homepage'
import {Switch, Route} from 'react-router-dom'
import ShopPage from './pages/ShopPage';
import Header from './header/Header';
import SinInPage from './pages/SinInPage';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SinInPage}/>
      </Switch>
    </div>
  );
}

export default App;
