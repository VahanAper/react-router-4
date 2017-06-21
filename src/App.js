import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route
        path="/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)"
        render={({ match }) => (
          <div>
            <h1>paramA: {match.params.a}</h1>
            <h2>paramB: {match.params.b}</h2>
          </div>
        )}
      />
    </div>
  </Router>
);

export default App;
