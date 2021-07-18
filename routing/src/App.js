import './App.css';
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import Error404 from './components/Error404';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact activeStyle={{backgroundColor: "black", color: "#fff"}} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{backgroundColor: "black", color: "#fff"}} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{backgroundColor: "black", color: "#fff"}} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component= {Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component = {Users} />
          <Route path="*" component = {Error404} />
        </Switch>
      </div>
    </Router>

  );
}


export default App;
