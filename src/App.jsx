import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>antd version: {version}</h1>
        <DatePicker />
        <Button type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
