import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import SignUp from "./components/SignUp";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";
import { useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, loading] = useAuthState(auth);
  console.log("YE HAI USER (App.js - line 10):", user);

  return (
    // <Layout>
    <div className="App">
      <div className="header">
        <h1>Hello world</h1>
        {!user && <button>Sign Up</button>}
        {user && (
          <img
            style={{ borderRadius: "50px", height: "70px", width: "70px" }}
            alt={user.displayName}
            src={user.photoURL}
          />
        )}
      </div>
      <div className="signup-form-container">{!user && <SignUp />}</div>
      <div className="user-dashboard">{user && <Dashboard />}</div>
    </div>
    // </Layout>
  );
}

export default App;
