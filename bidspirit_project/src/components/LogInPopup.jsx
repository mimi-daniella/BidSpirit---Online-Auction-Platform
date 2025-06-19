import React from "react";

export default function LogInPopup({ toggle }) {
    const popUpStyle = {
      backgroundColor: "pink",
      padding: "2rem",
      borderRadius: "12px",
      minWidth: "350px",
      minHeight: "200px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
    };

  return (
    <div className="popup" style={popUpStyle}>
      <div className="popup-inner">
        <h2>Login</h2>
        <form>
          <label>
            Username:
            <input type="text" />
          </label>
          <label>
            Password:
            <input type="password" />
          </label>
          <button type="submit">Login</button>
        </form>
        <button onClick={toggle}>Close</button>
      </div>
    </div>
  );
}
