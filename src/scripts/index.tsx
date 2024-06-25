import "../css/style.css";

import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return (
        <div className="container">
            <h1>Ian's React Skeleton</h1>
            <h2>Feel free to begin editing <span>index.tsx</span>.</h2>
        </div>
    )
}

let root = createRoot(document.getElementById("main"));
root.render(<App />)