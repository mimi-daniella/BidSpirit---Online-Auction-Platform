import React, { useState, useEffect } from "react";
import "./feedback.css";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [feedbackError, setFeedbackError] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    setEmailError("");
    setFeedbackError("");

    const trimmedEmail = email.trim();
    const trimmedFeedback = feedback.trim();

    if (trimmedEmail && !/\S+@\S+\.\S+/.test(trimmedEmail)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (!trimmedFeedback) {
      setFeedbackError("Feedback cannot be empty.");
      valid = false;
    }

    if (valid) {
      try {
        const response = await fetch("http://localhost:3000/feedbacks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: trimmedEmail,
            feedback: trimmedFeedback,
          }),
        });
        if (!response.ok) throw new Error("Failed to submit feedback");
        setStatus("Feedback submitted successfully!");
        setSubmitted(true);
        setFeedback("");
        setEmail("");
      } catch (err) {
        setStatus("Failed to submit feedback");
      }
    } else {
      setStatus("");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="feedback-container">
      {showPopup && (
        <div className="feedback-popup">
          <div className="feedback-popup-message">
            Welcome! 🎉 Leave us your thoughts.
          </div>
        </div>
      )}

      <div className="feedback-card">
        <div className="feedback-content">
          <h2>Share Your Feedback</h2>
          <p>We'd love to hear your thoughts to improve our service.</p>

          {submitted && (
            <div className="feedback-success">Thank you for your feedback!</div>
          )}
          {status && <div className="feedback-status">{status}</div>}

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email (optional)</label>
              <input
                type="email"
                className={`feedback-input ${emailError ? "input-error" : ""}`}
                id="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
              {emailError && <div className="error-message">{emailError}</div>}
            </div>

            <div>
              <label htmlFor="feedback">Your Feedback</label>
              <textarea
                className={`feedback-textarea ${
                  feedbackError ? "input-error" : ""
                }`}
                id="feedback"
                rows={4}
                placeholder="What do you think about our service?"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
              {feedbackError && (
                <div className="error-message">{feedbackError}</div>
              )}
            </div>

            <button
              type="submit"
              className="feedback-button"
              disabled={!feedback.trim()}
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
