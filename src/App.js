// React
import React, { useState } from "react";

// React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import "./App.css";

// Views
import Auth from "./views/Auth";
import Feed from "./views/Feed";

// Components
import Footer from "./components/Footer";

function App() {
  const [init, setInit] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userObj, setUserObj] = useState(null);

  return (
    <div className="app">
      <Router>
        <Switch>
          {isAuthenticated ? (
            <>
              <Route path="/">
                <Feed />
              </Route>
            </>
          ) : (
            <>
              <Route exact path="/">
                <Auth />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
