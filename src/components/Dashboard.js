import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

function Dashboard() {
  const [user, loading] = useAuthState(auth);
  return (
    <div>
      <h2>Welcome to your dashboard: {user.displayName}</h2>
      <button onClick={() => auth.signOut()}>Sign out</button>
    </div>
  );
}

export default Dashboard;
