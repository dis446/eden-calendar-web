import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import GoogleAuth from './component/Login/GoogleAuth';
import {useState} from 'react';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/login"}>Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path={"/about"}>
          </Route>
          <Route path={"/login"}>
            <GoogleAuth/>
          </Route>
          <Route path={"/home"}>
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;