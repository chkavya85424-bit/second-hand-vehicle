import { useState } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";
function LoginTemp() {
  const navigate = useNavigate();
  const [email, setEmail] =
    useState("");
  const [password, setPassword] =
    useState("");
  function handleLogin(event) {
    event.preventDefault();
    if (!email || !password) {
      return;
    }
    localStorage.setItem(
      "user",
      email
    );
    navigate("/");
  }
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          Vehicle<span>Hub</span>
        </div>
        <h1>
          Welcome Back
        </h1>
        <p className="auth-subtitle">
          Login to continue to your account.
        </p>
        <form
          onSubmit={handleLogin}
        >
          <label>
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
          />
          <label>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
          />
          <button
            type="submit"
            className="button primary full-width"
          >
            Login
          </button>
        </form>
        <p className="auth-bottom">
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
export default LoginTemp;