import { useState, useEffect } from "react";
import { ConnectButton } from "./ConnectButton";
import { useOverlay } from "@polkadot-cloud/react/hooks";
import { Overlays, useActiveAccounts } from "@polkadot-cloud/react/recipes/Connect";
import { AccountCard, Button } from "@polkadot-cloud/react";
import { EllipsisProps, IconProps, TitleProps } from "@polkadot-cloud/react/recipes/AccountCard";

export const Home = () => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    if (theme != "light" && theme != "dark") {
      setTheme("light");
    }
  }, [theme]);

  const { openModal } = useOverlay().modal;
  const { activeAccount } = useActiveAccounts();

  const titleProps: TitleProps = {
    address: activeAccount as string || "",
    justify: "flex-start",
    align: "center",
  };
  
  const ellipsisProps: EllipsisProps = {
    active: true,
    amount: 60,
    position: "end",
  };
  
  // iconProps are very similar to the ones that Polkicon receives for consistency
  const iconProps: IconProps = {
    size: 60,
    gridSize: 3,
    justify: "flex-start",
    outerColor: "transparent",
    dark: true,
  };
  
  return (
    <div className={`theme-polkadot-relay theme-${theme}`}>
      <div className="card">
        <h1>Cloud tests</h1>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Go to {theme === "light" ? "🌙" : "🌞"}
        </button>
        <ConnectButton />
      </div>
      <AccountCard
        title={titleProps}
        fontSize="x-small"
        ellipsis={ellipsisProps}
        icon={iconProps}
      />
      <div className="card">
        <Overlays />
        <div style={{ display: "flex" }}>
          {activeAccount && (
            <p style={{ padding: "0 10rem" }}>{activeAccount}</p>
          )}
          <Button
            type="primary"
            text={activeAccount ? "Connected" : "Connect"}
            onClick={() => {
              activeAccount ? openModal({ key: "Accounts" }) : openModal({ key: "Connect" });
            }}
          />
        </div>
      </div>
    </div>
  );
};


