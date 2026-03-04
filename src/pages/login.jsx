import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr(false);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      setErr(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Nexus Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="email"
            autoComplete="email"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            required
          />
          <button disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
          {err && <span>Something went wrong - check your credentials</span>}
        </form>
        <p>
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
