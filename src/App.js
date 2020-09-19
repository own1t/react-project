// React
import React, { useEffect, useState } from "react";

// React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// CSS
import "./App.css";

// Views
import Auth from "./views/Auth";
import Feed from "./views/Feed";

// Components
import Footer from "./components/Footer";

// Firebase
import { authService } from "./firebase";

function App() {
  const [init, setInit] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        setIsAuthenticated(false);
      }

      setInit(true);
    });
  }, []);

  return (
    <div className="app">
      {init ? (
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
      ) : (
        "Initializing..."
      )}
    </div>
  );
}

export default App;
