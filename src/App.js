// React
import React, { useEffect, useState } from "react";

// React Router Dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Views
import Auth from "./views/Auth";
import Feed from "./views/Feed";
import Profile from "./views/Profile";
import Messenger from "./views/Messenger";
import More from "./views/More";

// Components
import Footer from "./components/Footer";

// Firebase
import { authService } from "./firebase";

// CSS
import "./App.css";

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
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setIsAuthenticated(false);
      }

      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  // console.log(userObj);

  return (
    <div className="app">
      {init ? (
        <Router>
          <Footer />
          <Switch>
            {isAuthenticated ? (
              <>
                <Route exact path="/">
                  <Feed userObj={userObj} refreshUser={refreshUser} />
                </Route>

                <Route exact path="/profile">
                  <Profile userObj={userObj} refreshUser={refreshUser} />
                </Route>

                <Route exact path="/messenger">
                  <Messenger userObj={userObj} refreshUser={refreshUser} />
                </Route>

                <Route exact path="/more">
                  <More userObj={userObj} refreshUser={refreshUser} />
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
