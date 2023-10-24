import { useState, useEffect } from "react";
import "./App.css";
import { ExtensionsFound } from "./ExtensionsFound";
import { ConnectButton } from "./ConnectButton";

const App = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (theme != "light" && theme != "dark") {
      setTheme("light");
    }
  }, [theme]);

  return (
    <div className={`theme-polkadot-relay theme-${theme}`}>
      <div className="card">
        <h1>Cloud tests</h1>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Go to {theme === "light" ? "🌙" : "🌞"}
        </button>
        <ConnectButton />
        <ExtensionsFound />
      </div>
    </div>
  );
};

export default App;
