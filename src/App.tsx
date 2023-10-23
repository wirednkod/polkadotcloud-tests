import { useState, useEffect } from "react";
import "./App.css";

import { useExtensions } from "@polkadot-cloud/react/hooks";

import { Extensions, ExtensionsArray } from "@polkadot-cloud/assets/extensions";

function App() {
  const [count, setCount] = useState(0);

  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (theme != "light" && theme != "dark") {
      setTheme("light");
    }
  }, [theme]);

  const { extensions, extensionsStatus } = useExtensions();

  console.log("extensions", extensions);
  console.log("extensionsStatus", extensionsStatus);
  console.log("EXtnesion", Extensions, ExtensionsArray);

  return (
    <div className={`theme-polkadot-relay theme-${theme}`}>
      <h1>Cloud tests</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Set theme to {theme === "light" ? "dark" : "light"}
        </button>
      </div>
    </div>
  );
}

export default App;
