import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Main from './pages/main/Main';
import Layout from './pages/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

// import Register from './pages/register business/Register';
// import AllOffers from './components/section/all offers/AllOffers';
// import Category from './components/categories/Category';
// import OfferDetails from './components/section/offer details/OfferDetails';
// import About from './pages/about/About';
// import Login from './pages/form/login/Login';
// import Signup from './pages/form/signup/Signup';
// import Policy from './pages/policy/Policy';

const Signup = React.lazy(() => import('./pages/form/signup/Signup'));
const Login = React.lazy(() => import('./pages/form/login/Login'));
const About = React.lazy(() => import('./pages/about/About'));
const AllOffers = React.lazy(() => import('./components/section/all offers/AllOffers'));
const Register = React.lazy(() => import('./pages/register business/Register'));
const OfferDetails = React.lazy(() => import('./components/section/offer details/OfferDetails'));
const Category = React.lazy(() => import('./components/categories/Category'));
const Policy = React.lazy(() => import('./pages/policy/Policy'));

function App() {
  return (
    <div className='App'>
      <Layout>
        <Suspense 
          fallback={
            <div className='centered'>
              <LoadingSpinner />
            </div>
          }>
          <Switch>
            <Route path='/' exact>
              <Main />
            </Route>
            <Route path='/signup' exact>
              <Signup />
            </Route>
            <Route path='/login' exact>
              <Login />
            </Route>
            <Route path='/about-us'>
              <About />
            </Route>
            <Route path='/policy'>
              <Policy></Policy>
            </Route>
            <Route path='/all-offers/:category/:offerId'>
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
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
