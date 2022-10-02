import React from "react";
import { createRoot } from "react-dom/client";

import "./style.css";

const App: React.FC = () => {
  return (
    <div>
      <h2>Popup window</h2>
      <p>This element created by React</p>
    </div>
  )
}

createRoot(document.getElementById("app")).render(<App/>)
