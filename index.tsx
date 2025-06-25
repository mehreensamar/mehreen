import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css"; // Import Tailwind styles if not already

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("❌ Root element not found in index.html");
}
<!-- Force rebuild -->

