import React from "react";

function Profile({ setUser }) {
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>👤 Profile</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;