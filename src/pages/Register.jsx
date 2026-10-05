import { useState } from "react";
import {
  Link,
  useNavigate
} from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const [form, setForm] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
  const [error, setError] =
    useState("");
  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]:
        event.target.value
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    setError("");
    if (
      form.password !==
      form.confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );
      return;
    }
    localStorage.setItem(
      "userData",
      JSON.stringify({
        name: form.name,
        email: form.email
      })
    );
    navigate("/login");
  }
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">
          Vehicle<span>Hub</span>
        </div>
        <h1>
          Create Account
        </h1>
        <p className="auth-subtitle">
          Create an account to use the marketplace.
        </p>
        {error && (
          <p className="error-message">
            {error}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
        >
          <label>
            Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <label>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <label>
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="button primary full-width"
          >
            Register
          </button>
        </form>
        <p className="auth-bottom">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Register;