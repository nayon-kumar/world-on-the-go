import React from "react";

export default function AboutLayout({ children }) {
  return (
    <div>
      <hr className="mt-5" />
      <nav className="mt-5">Mission | Vision</nav>
      {children}
    </div>
  );
}
