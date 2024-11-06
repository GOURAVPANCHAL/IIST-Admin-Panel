import React from "react";
import logo from "../../Images/IISD.png";
function Dashboard() {
  return (
    <div>
    <div className="d-flex justify-content-center mt-5">
      <div className="rounded-logo">
        <img src={logo} style={{ height: "100%", width: "100%" }} alt="logo" />
      </div>
    </div>
    <div>
      <h1 className="text-center">Welcome To</h1>
      <h2 style={{ color: `var(--color-began)` }} className="text-center mb-4">
        <span> भारतीय कौशल विकास संस्थान</span> <br />
        INDIAN INSTITUTE OF SKILL DEVELOPMENT
      </h2>
    </div>
  </div>
  
  );
}

export default Dashboard;
