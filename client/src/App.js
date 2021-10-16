import './_App.scss';
import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../src/Pages/Login';
import Register from './Pages/Register';
import DashBoard from '../src/Pages/DashBoard';
import AddBook from './Pages/AddBook';
import Profile from './Pages/Profile';
import SearchBook from './Pages/SearchBook';
import UpdateBook from './Pages/UpdateBook';
import { AuthContext } from './Context/AuthContext';
import ViewAll from './Pages/ViewAll';
function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={user ? DashBoard : Login} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/viewall' component={ViewAll} />
          <Route path='/updatebook/:bookid'>
            {user?.isAdmin && <UpdateBook />}
          </Route>
          <Route path='/searchbook' component={SearchBook} />
          <Route path='/addbook'>{user?.isAdmin && <AddBook />}</Route>
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
