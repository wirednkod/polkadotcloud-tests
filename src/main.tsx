import { StrictMode } from "React";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  ExtensionsProvider,
  ExtensionAccountsProvider,
} from "@polkadot-cloud/react/providers";

import "./index.css";
import "@polkadot-cloud/core/accent/polkadot-relay.css";
import "@polkadot-cloud/core/theme/cloud/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ExtensionsProvider>
    <ExtensionAccountsProvider
      dappName={"Notify me"}
      network={"polkadot"}
      ss58={0}
      activeAccount={null}
      setActiveAccount={() => {}}
    >
      <StrictMode>
        <div className="theme-polkadot-relay theme-dark">
          <App />
        </div>
      </StrictMode>
    </ExtensionAccountsProvider>
  </ExtensionsProvider>
);
