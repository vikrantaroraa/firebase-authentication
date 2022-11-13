import React from "react";
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <nav style={{ backgroundColor: "lightpink" }}>
      <Nav />
      <main>{children}</main>
    </nav>
  );
}

export default Layout;
