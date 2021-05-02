import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './login';
import Home from './home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
