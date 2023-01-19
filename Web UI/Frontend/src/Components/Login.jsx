import React, { useRef, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Login from Context:\t",login);
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} id="form-body">
        <label id="email-text">Email</label>
        <input id="email-box" type="email" ref={emailRef} required />
        <label id="pw-text">Password</label>
        <input id="pw-box" type="password" ref={passwordRef} required />
        <button disabled={loading} id="submit-btn" type="submit">
          Log In
        </button>
      </form>
    </>
  );
}
