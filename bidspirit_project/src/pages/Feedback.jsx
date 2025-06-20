import React, { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFeedback("");
    setName("");
    setEmail("");
    // Here you can send the feedback to your backend or API
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "linear-gradient(120deg, #e6fff3 0%, #b2f7cc 40%, #43e97b 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container py-5" style={{ maxWidth: 600 }}>
      <div className="card shadow-lg border-0" style={{ borderRadius: 18 }}>
        <div className="card-body p-4">
          <h2 className="fw-bold mb-3 text-center" style={{ color: "#11998e" }}>
            We Value Your Feedback
          </h2>
          <p className="text-center text-muted mb-4">
            Please let us know your thoughts, suggestions, or concerns. Your
            feedback helps us improve!
          </p>
          {submitted && (
            <div className="alert alert-success text-center" role="alert">
              Thank you for your feedback!
            </div>
          )}
          <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="feedback" className="form-label fw-semibold">
                Feedback
              </label>
              <textarea
                className="form-control"
                id="feedback"
                rows={5}
                placeholder="Enter your feedback here..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
                style={{ resize: "vertical" }}
              />
            </div>
            <div className="d-grid">
              <button
                className="btn btn-success fw-bold"
                type="submit"
                style={{
                  borderRadius: 20,
                  background: "#11998e",
                  border: "none",
                }}
                disabled={!name || !email || !feedback}
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Feedback;