import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../src/Pages/Login';
import Register from './Pages/Register';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' component={Register} />
          <Route path='/register' component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
