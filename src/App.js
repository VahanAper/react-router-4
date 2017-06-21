import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  // Switch,
} from 'react-router-dom';

import './App.css';

const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/old-123">old</Link>
    <Link to="/new-456">new</Link>
    <Link to="/protected">Protected</Link>
  </nav>

// const loggedin = false;
const loggedin = true;

const App = (props) => (
  <Router>
    <div>
      <Links />
      {/*<Switch>*/}
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route
          path="/new-:str"
          render={({ match }) =>
            <h1>New: {match.params.str}</h1>
          }
        />
        <Route
          path="/old-:str"
          render={({ match }) =>
            <Redirect to={`/new-${match.params.str}`} />
          }
        />
        <Route
          path="/protected"
          render={() => (
            loggedin
            ? <h1>Welcome</h1>
            : <Redirect to="/new-Login" />
          )}
        />
        {/*<Redirect
          from="/old"
          to="/new"
          />*/}
      {/*</Switch>*/}
    </div>
  </Router>
);

export default App;
