// React
import React, { useState } from "react";

// Material-ui
import { Button } from "@material-ui/core";

// Firebase
import { authService } from "../firebase";

// CSS
import "./AuthForm.css";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let data;

      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <>
      <div className="auth">
        <form className="authForm" onSubmit={handleSubmit}>
          <input
            className="authForm__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            name="email"
            placeholder="Email"
          />

          <input
            className="authForm__input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            name="password"
            placeholder="Password"
          />

          {newAccount ? (
            <Button className="authForm__buttons" type="submit">
              Create Account
            </Button>
          ) : (
            <Button className="authForm__buttons" type="submit">
              Sign In
            </Button>
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
