import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  ExtensionsProvider,
  ExtensionAccountsProvider,
} from "@polkadot-cloud/react/providers";

import "./index.css";
import "@polkadot-cloud/core/accent/polkadot-relay.css";
import "@polkadot-cloud/core/theme/cloud/index.css";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";

// 1. Get projectId
const projectId = "YOUR_PROJECT_ID";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ExtensionsProvider>
    <ExtensionAccountsProvider
      dappName={"Something"}
      network={"kusama"}
      ss58={0}
      activeAccount={null}
      setActiveAccount={() => {}}
    >
      <WagmiConfig config={wagmiConfig}>
        <App />
      </WagmiConfig>
    </ExtensionAccountsProvider>
  </ExtensionsProvider>
);
