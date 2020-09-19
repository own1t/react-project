// React
import React from "react";

// CSS
import "./Auth.css";

// Components
import AuthForm from "../components/AuthForm";

// Material-ui
import { Button } from "@material-ui/core";

// Firebase
import { authService, firebaseInstance } from "../firebase";

function Auth() {
  const handleGoogleSignIn = async () => {
    const provider = new firebaseInstance.auth.GoogleAuthProvider();

    await authService.signInWithPopup(provider);
  };

  const handleGithubSignIn = async () => {
    const provider = new firebaseInstance.auth.GithubAuthProvider();

    await authService.signInWithPopup(provider);
  };

  return (
    <>
      <div className="auth">
        <AuthForm />

        <div>
          <Button
            className="auth__buttons"
            name="google"
            onClick={handleGoogleSignIn}
          >
            Continue with Google
          </Button>

          <Button
            className="auth__buttons"
            name="github"
            onClick={handleGithubSignIn}
          >
            Continue with Github
          </Button>
        </div>
      </div>
    </>
  );
}

export default Auth;
