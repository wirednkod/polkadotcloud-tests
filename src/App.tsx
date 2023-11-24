import "./App.css";

import { Connect } from "@polkadot-cloud/recipes";
import { ConnectConfigProvider, connectInfo } from "@polkadot-cloud/recipes/Connect";


import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { arbitrum, mainnet } from "wagmi/chains";
import { DappInfo } from "@polkadot-cloud/recipes/types";
import { Home } from "./Home";

import { WagmiConfig } from "wagmi";
import { ApiPromise } from "@polkadot/api";
import { ApiContext, useApiCreate } from "./contexts/ApiContext";
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

const App = () => {
  const api: ApiPromise = useApiCreate()
  
  const dappInfo: DappInfo = {
    dappName: "dApp Name",
    network: "polkadot",
    ss58: 0,
  };
  const providers = connectInfo(dappInfo);
  
  return (
    <ConnectConfigProvider dappInfo={dappInfo}>
      <Connect providers={providers}>
      <WagmiConfig config={wagmiConfig}>
        <ApiContext.Provider value={api}>
          <Home />
        </ApiContext.Provider>
      </WagmiConfig>
      </Connect>
    </ConnectConfigProvider>
  );
};

export default App;
