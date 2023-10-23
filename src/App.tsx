import { useState } from "react";
import "./App.css";

import { useExtensions } from "@polkadot-cloud/react/hooks";

import { Extensions, ExtensionsArray } from "@polkadot-cloud/assets/extensions";

function App() {
  const [count, setCount] = useState(0);

  const { extensions, extensionsStatus } = useExtensions();

  console.log("extensions", extensions);
  console.log("extensionsStatus", extensionsStatus);
  console.log("EXtnesion", Extensions, ExtensionsArray);

  return (
    <>
      <h1>Cloud tests</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
