import react from 'react';
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));
root.render(
    <>
        <p>Pizza Menu Project</p>
        <App/>
    </>
)