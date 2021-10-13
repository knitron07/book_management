import './_App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../src/Pages/Login';
import Register from './Pages/Register';
import DashBoard from '../src/Pages/DashBoard';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {/* <Route path='/' component={Register} /> */}
          <Route path='/' component={DashBoard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
