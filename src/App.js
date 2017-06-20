import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route
        path="/:page?-:subpage?"
        render={({ match }) => (
          <div>
            <h1>PAGE: {match.params.page || 'Home'}</h1>
            <h2>SUBPAGE: {match.params.subpage}</h2>
          </div>
        )}
      />
    </div>
  </Router>
);

export default App;
