import "../css/style.css";

import React from "react";
import { createRoot } from "react-dom/client";

import { Icon } from '@iconify/react';

function Header() {
    return (
        <header>
            <h1>Ian's <Icon className="logo" icon="cib:react" width="100px" height="100px" /> Skeleton</h1>
            <h2>Feel free to begin editing <span>index.tsx</span>.</h2>
        </header>
    )
}

createRoot(document.getElementById("header")).render(Header());