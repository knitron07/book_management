import './_App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../src/Pages/Login';
import Register from './Pages/Register';
import DashBoard from '../src/Pages/DashBoard';
import AddBook from './Pages/AddBook';
import SearchFields from './Components/SearchFields';
import RemoveBook from './Pages/RemoveBook';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' component={RemoveBook} />
          {/* <Route path='/addbook' component={AddBook} /> */}
          {/* <Route path='/register' component={Register} /> */}
          {/* <Route path='/' component={DashBoard} /> */}
          {/* <Route path='/login' component={Login} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
