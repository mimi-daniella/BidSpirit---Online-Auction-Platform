import React, { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const errors = {};
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      errors.email = "Invalid email address";
    }
    if (!form.password) {
      errors.password = "Password is required";
    } else if (form.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!form.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = validate();
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      try {
        // Replace with your actual signup API endpoint
        const response = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!response.ok) throw new Error("Signup failed");
        setStatus("Registration successful!");
        setForm({
          email: "",
          password: "",
          confirmPassword: "",
        });
      } catch (err) {
        setStatus("Signup failed");
      }
    } else {
      setStatus("");
    }
  };

  return (
    <div className="container" style={{ maxWidth: 420, margin: "40px auto" }}>
      <div
        className="p-4 shadow rounded bg-white"
        style={{
          maxWidth: 400,
          margin: "0 auto",
          borderRadius: 12,
        }}
      >
        <h2 className="mb-4 text-center fw-bold" style={{ color: "#11998e" }}>
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
            {errors.email && (
              <div className="text-danger small">{errors.email}</div>
            )}
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {errors.password && (
              <div className="text-danger small">{errors.password}</div>
            )}
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
            />
            {errors.confirmPassword && (
              <div className="text-danger small">{errors.confirmPassword}</div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 fw-bold"
            style={{ letterSpacing: "1px" }}
          >
            Sign Up
          </button>
        </form>
        {status && (
          <div
            className={`mt-3 text-center fw-bold ${
              status.includes("success") ? "text-success" : "text-danger"
            }`}
          >
            {status}
          </div>
        )}
    {    sessionStorage.setItem("user", JSON.stringify(form))}
      </div>
    </div>
  );
};

export default Signup;
