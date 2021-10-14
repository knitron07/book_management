import './_App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from '../src/Pages/Login';
import Register from './Pages/Register';
import DashBoard from '../src/Pages/DashBoard';
import AddBook from './Pages/AddBook';

import SearchBook from './Pages/SearchBook';
import UpdateBook from './Pages/UpdateBook';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {/* <Route exact path='/' component={Login} />
          <Route path='/register' component={Register} /> */}
          <Route exact path='/' component={DashBoard} />
          <Route path='/updatebook/:bookid' component={UpdateBook} />
          <Route path='/searchbook' component={SearchBook} />
          <Route path='/addbook' component={AddBook} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
