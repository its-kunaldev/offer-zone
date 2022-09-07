import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './pages/main/Main';
import Register from './pages/register business/Register';
import AllOffers from './components/section/all offers/AllOffers';
import Layout from './pages/layout/Layout';
import Category from './components/categories/Category';
import OfferDetails from './components/section/offer details/OfferDetails';
import About from './pages/about/About';
import Signup from './pages/form/login/Login.js';
import Login from './pages/form/signup/Signup';
import Policy from './pages/policy/Policy';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Main />
          </Route>
          <Route path='/login' exact>
            <Signup/>
          </Route>
          <Route path='/signup' exact>
            <Login />
          </Route>
          <Route path='/about-us'>
            <About />
          </Route>
          <Route path='/policy'>
            <Policy></Policy>
          </Route>
          <Route path='/offer/:offerId'>
            <OfferDetails />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/all-offers' exact>
            <AllOffers />
          </Route>
          <Route path='/:city' exact>
            <Main />
          </Route>
          <Route path='/all-offers/:category'>
            <Category />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
