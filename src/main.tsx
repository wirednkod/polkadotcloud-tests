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
      dappName={"Something"}
      network={"kusama"}
      ss58={0}
      activeAccount={null}
      setActiveAccount={() => {}}
    >
      <App />
    </ExtensionAccountsProvider>
  </ExtensionsProvider>
);
