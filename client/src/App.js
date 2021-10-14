import './_App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../src/Pages/Login';
import Register from './Pages/Register';
import DashBoard from '../src/Pages/DashBoard';
import AddBook from './Pages/AddBook';
import SearchFields from './Components/SearchFields';
import RemoveBook from './Pages/RemoveBook';
import UpdateBook from './Pages/UpdateBook';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {/* <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} /> */}
          {/* <Route exact path='/' component={DashBoard} /> */}
          <Route exact path='/' component={UpdateBook} />
          <Route path='/removebook' component={RemoveBook} />
          <Route path='/addbook' component={AddBook} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
