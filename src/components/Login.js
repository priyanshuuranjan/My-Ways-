import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import styles from "./Login.module.css"; // Import the CSS module

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      navigate("/dashboard");
    } else {
      setError("Please enter a username and password.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <h2 className={styles.heading}>Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Control
              type="text"
              placeholder="Username"
              className={styles.inputField}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              className={styles.inputField}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className={styles.btnContainer}>
            <Button
              className={styles.loginBtn}
              onClick={handleLogin}
              type="button"
            >
              Log In
            </Button>
          </div>
        </Form>
        <div className={styles.orText}>OR</div>
        <div className={styles.signupBox}>
          <p className={styles.signupText}>
            Don't have an account?{" "}
            <Link to="/signup" className={styles.signupLink}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
