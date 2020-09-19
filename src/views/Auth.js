// React
import React from "react";

// CSS
import "./Auth.css";

// Components
import AuthForm from "../components/AuthForm";

// Material-ui
import { Button } from "@material-ui/core";

function Auth() {
  return (
    <>
      <div className="auth">
        <AuthForm />

        <div>
          <Button className="auth__buttons" name="google">
            Continue with Google
          </Button>
          <Button className="auth__buttons" name="github">
            Continue with Github
          </Button>
        </div>
      </div>
    </>
  );
}

export default Auth;
