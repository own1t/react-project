// React
import React, { useEffect, useState } from "react";

// CSS
import "./AuthForm.css";

// Material-ui
import { Button } from "@material-ui/core";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <>
      <div className="auth">
        <form className="authForm">
          <input
            className="authForm__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <input
            className="authForm__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          {newAccount ? (
            <Button className="authForm__buttons">Create Account</Button>
          ) : (
            <Button className="authForm__buttons">Sign In</Button>
          )}

          {error && <span className="authForm__error">{error}</span>}
        </form>

        <Button className="authForm__switch" onClick={toggleAccount}>
          {newAccount ? "Sign In" : "Create Account"}
        </Button>
      </div>
    </>
  );
}

export default Auth;
