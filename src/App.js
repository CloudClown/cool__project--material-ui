import './App.css';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Userprofile from './pages/Userprofile';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Userprofile />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
