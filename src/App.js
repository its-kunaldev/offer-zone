import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './pages/main/Main';
import Register from './pages/register business/Register';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
