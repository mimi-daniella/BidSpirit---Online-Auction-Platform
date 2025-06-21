import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    setSuccess(true);
    // Here you would send the data to your backend
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-sm p-4">
            <h2
              className="fw-bold mb-4 text-center"
              style={{ color: "#11998e" }}
            >
              Sign Up
            </h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && (
              <div className="alert alert-success">
                Registration successful! You can now log in.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="confirm"
                  value={form.confirm}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100 fw-bold">
                Register
              </button>
            </form>
            <div className="text-center mt-3">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-decoration-none"
                style={{ color: "#11998e" }}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
