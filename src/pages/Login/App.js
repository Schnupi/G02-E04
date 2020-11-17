import React, { useState } from "react";
import "./app.scss";
import Button from "../../components/Button";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`App ${theme}`}>
      <Button
        onClick={() => setTheme((old) => (old === "light" ? "dark" : "light"))}
        styleButton="primary"
      ></Button>
      <Button styleButton="alert"></Button>
    </div>
  );
};

export default App;
