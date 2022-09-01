import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './pages/main/Main';
import Register from './pages/register business/Register';
import AllOffers from './components/section/all offers/AllOffers';
import Layout from './pages/layout/Layout';

function App() {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Main />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/all-offer'>
            <AllOffers />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
