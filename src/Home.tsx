import { useState, useEffect } from "react";
import { ConnectButton } from "./ConnectButton";
import type { Registry } from '@polkadot/types/types';
import { useOverlay } from "@polkadot-cloud/react/hooks";
import { Button, Grid } from "@polkadot-cloud/react";

import { AccountCard } from "@polkadot-cloud/recipes";
import { EllipsisProps, IconProps, TitleProps } from "@polkadot-cloud/recipes/AccountCard";
import { Overlays, useActiveAccounts } from "@polkadot-cloud/recipes/Connect";

import { useApiCreate } from "./contexts/ApiContext";
import { useLocalStorage } from "./contexts/useLocalStorage";
import { usePrevious } from "./contexts/usePrevious";
// import { VoidFn } from "@polkadot-cloud/react/utils/types";

const getFormat = (registry: Registry, formatIndex = 0): [number, string] => {
  const decimals = registry.chainDecimals;
  const tokens = registry.chainTokens;

  return [
    formatIndex < decimals.length
      ? decimals[formatIndex]
      : decimals[0],
    formatIndex < tokens.length
      ? tokens[formatIndex]
      : tokens[1]
  ];
}


export const Home = () => {
  const [theme, setTheme] = useState<string>("light");
  const [lclAccount, setLclAccount] = useLocalStorage("activeAccount")

  const api = useApiCreate();
  const { openModal } = useOverlay().modal;
  const { activeAccount, setActiveAccount } = useActiveAccounts()
  
  const prevAccountValue = usePrevious(activeAccount);

  const [balance, setBalance] = useState<number>()

  useEffect(() => {
  }, [api])


  useEffect(() => {
    // const unsubscribeAll: VoidFn | null = null

    const getBalance = async () => {
      const isReady = await api?.isReady;
      if (lclAccount && isReady) {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const { data: { free: currentFree }, nonce: currentNonce } = await api.query?.system.account(lclAccount);
        console.log('currentFree', currentFree, "currentNonce", currentNonce)
        
        const f = getFormat(api?.registry as unknown as Registry)
        console.log('f: ', f)
      
        setBalance(+currentFree)
      }
    } 
    getBalance()

    // return () => unsubscribeAll && unsubscribeAll()      
  }, [api?.isReady, api.query?.system, api?.registry, lclAccount])

  useEffect(() => {
    if (theme != "light" && theme != "dark") {
      setTheme("light");
    }
  }, [theme]);

  useEffect(() => {
    if (prevAccountValue !== activeAccount) {
      setLclAccount(activeAccount as string)
    } else {
      if (lclAccount && lclAccount !== "null") {
        setActiveAccount(lclAccount)
      } else {
        setLclAccount(activeAccount || "")
      }
    }
  }, [activeAccount, lclAccount, prevAccountValue, setActiveAccount, setLclAccount])

  const titleProps: TitleProps = {
    address: lclAccount as string || "",
    justify: "flex-start",
    align: "center",
  };
  
  const ellipsisProps: EllipsisProps = {
    active: true,
    amount: 10,
    position: "center",
  };
  
  // iconProps are very similar to the ones that Polkicon receives for consistency
  const iconProps: IconProps = {
    copy: true,
    gridSize: 2,
    justify: "space-around",
  };
  
  return (
    <div className={`theme-polkadot-relay theme-${theme}`}>
      <Overlays />
      <Grid row justify="space-between" style={{ padding: "1rem"}}>
          <Grid column md={6}></Grid>
          <Grid column md={3}>
          {lclAccount ? <AccountCard
              icon={iconProps}
              fontSize="small"
              title={titleProps}
              ellipsis={ellipsisProps}
            /> : null}
            {balance}
          </Grid>
          <Grid column md={1}>
            <div style={{ display: "flex" }}>
              <Button
                type="primary"
                text={lclAccount ? "Connected" : "Connect"}
                onClick={() => {
                  lclAccount ? openModal({ key: "Accounts" }) : openModal({ key: "Connect" });
                }}
              />
            </div>
          </Grid>
          <Grid column md={1}><button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Go to {theme === "light" ? "🌙" : "🌞"}
        </button></Grid>
        </Grid>
      <div className="card">
        <h1>Cloud tests</h1>
        
        <ConnectButton />
      </div>
    </div>
  );
};


