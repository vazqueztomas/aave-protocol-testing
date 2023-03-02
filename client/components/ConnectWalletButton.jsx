import React, { useEffect, useState } from "react";
import Metamask from "./Metamask";

const ConnectWalletButton = ({ client, setClient }) => {
  const [haveMetamask, setHaveMetamask] = useState(true);

  const checkConnection = async () => {
    const { ethereum } = window;
    if (ethereum) {
      setHaveMetamask(true);
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setClient({
          isConnected: true,
          address: accounts[0],
        });
      } else {
        setClient({
          isConnected: false,
        });
      }
    } else {
      setHaveMetamask(false);
    }
  };

  const connectWeb3 = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) return;

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setClient({
        isConnected: true,
        address: accounts[0],
      });
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <div className="main">
      <button onClick={connectWeb3}>
        {client.isConnected ? (
          <>
            {client.address?.slice(0, 4)}...
            {client.address?.slice(38, 42)}
          </>
        ) : (
          <>Connect Wallet</>
        )}
      </button>
      {!haveMetamask ? <Metamask /> : null}
    </div>
  );
};

export default ConnectWalletButton;
