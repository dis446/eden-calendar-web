import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GoogleAuth from './component/Login/GoogleAuth';
import {useAppSelector} from './store/hooks';

const App = () => {
  const user = useAppSelector((state) => state.users);

  if(user._id === '') {
    return <GoogleAuth/>;
  }

  return (
    <Router>
      <nav>
        <ul>
          <li>
          </li>
        </ul>
      </nav>

      <h1> Welcome to Eden Calendar</h1>
      <h2> ${user.name}</h2>

      <div>
        <Switch>
          <Route path={'/about'}>
          </Route>
          <Route path={'/home'}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;