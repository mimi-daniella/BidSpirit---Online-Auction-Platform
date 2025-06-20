import React, { useState } from "react";

const Auth = ({ onClose }) => {
  const [mode, setMode] = useState("login");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginForm.email || !loginForm.password) {
      setError("Please enter both email and password.");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("Login successful!");
<<<<<<< HEAD
   
=======
>>>>>>> origin/frontend-ui
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!registerForm.name || !registerForm.email || !registerForm.password || !registerForm.confirm) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }
    if (registerForm.password !== registerForm.confirm) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }
    setError("");
<<<<<<< HEAD
    setSuccess("Registration successful! You can start bidding now!");

=======
    setSuccess("Registration successful! You can now log in.");
>>>>>>> origin/frontend-ui
  };

  return (
    <div className="position-relative">
      {onClose && (
        <button
          type="button"
          className="btn-close position-absolute end-0 top-0 m-3"
          aria-label="Close"
          onClick={onClose}
          style={{ zIndex: 2 }}
        ></button>
      )}
      <div
        className="card shadow-lg p-4"
        style={{
          borderRadius: 18,
          minWidth: 320,
          maxWidth: 400,
          margin: "0 auto",
          background: "#fff",
        }}
      >
        <div className="d-flex justify-content-center mb-4">
          <button
            className={`btn ${mode === "login" ? "btn-success" : "btn-outline-success"} fw-bold me-2`}
            onClick={() => { setMode("login"); setError(""); setSuccess(""); }}
          >
            Login
          </button>
          <button
            className={`btn ${mode === "register" ? "btn-success" : "btn-outline-success"} fw-bold`}
            onClick={() => { setMode("register"); setError(""); setSuccess(""); }}
          >
            Sign Up
          </button>
        </div>
        {error && <div className="alert alert-danger py-2">{error}</div>}
        {success && <div className="alert alert-success py-2">{success}</div>}

        {mode === "login" ? (
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={loginForm.email}
                onChange={handleLoginChange}
                required
                autoFocus
              />
            </div>
            <div className="mb-3 position-relative">
              <label className="form-label fw-semibold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="password"
                value={loginForm.password}
                onChange={handleLoginChange}
                required
              />
              <span
                onClick={() => setShowPassword((v) => !v)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 38,
                  cursor: "pointer",
                  color: "#11998e",
                  fontSize: 18,
                  userSelect: "none"
                }}
                title={showPassword ? "Hide password" : "Show password"}
              >
                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
              </span>
            </div>
            <button type="submit" className="btn btn-success w-100 fw-bold">Login</button>
            <div className="text-center mt-3">
              <span
                className="text-decoration-underline"
                style={{ color: "#11998e", cursor: "pointer" }}
                onClick={() => { setMode("register"); setError(""); setSuccess(""); }}
              >
                Don't have an account? Sign Up
              </span>
            </div>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={registerForm.name}
                onChange={handleRegisterChange}
                required
                autoFocus
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={registerForm.email}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="mb-3 position-relative">
              <label className="form-label fw-semibold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="password"
                value={registerForm.password}
                onChange={handleRegisterChange}
                required
              />
              <span
                onClick={() => setShowPassword((v) => !v)}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 38,
                  cursor: "pointer",
                  color: "#11998e",
                  fontSize: 18,
                  userSelect: "none"
                }}
                title={showPassword ? "Hide password" : "Show password"}
              >
                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
              </span>
            </div>
            <div className="mb-3">
              <label className="form-label fw-semibold">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="confirm"
                value={registerForm.confirm}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100 fw-bold">Sign Up</button>
            <div className="text-center mt-3">
              <span
                className="text-decoration-underline"
                style={{ color: "#11998e", cursor: "pointer" }}
                onClick={() => { setMode("login"); setError(""); setSuccess(""); }}
              >
                Already have an account? Login
              </span>
            </div>
          </form>
        )}
      </div>
      <style>
        {`
          @media (max-width: 500px) {
            .card {
              min-width: 100vw !important;
              max-width: 100vw !important;
              border-radius: 0 !important;
              padding: 1.5rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Auth;