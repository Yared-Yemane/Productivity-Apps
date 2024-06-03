import React from "react";
import "./RouterStyles.css";
// import App from "./App";

function AppRouter() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Site Name
      </a>
      <ul>
        <li>
          <a href="/todos">Todos-App</a>
        </li>
        <li>
          <a href="/sci-calc">Scientific-Calc</a>
        </li>
        <li>
          <a href="/img-gallery">Image-Gallery</a>
        </li>
      </ul>
    </nav>
  );
}

export default AppRouter;
