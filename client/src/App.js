import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../src/Pages/Login';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
