import { useState } from "react";
import ConnectWalletButton from "../components/ConnectWalletButton";

function App() {
  const [client, setClient] = useState({
    isConnected: false,
  });

  console.log(client);
  return (
    <>
      <h1>Rather labs Challenge 🚀</h1>
      {!client.isConnected ? (
        <p>If you want to view pools, please connect your wallet</p>
      ) : null}
      <ConnectWalletButton client={client} setClient={setClient} />
    </>
  );
}

export default App;
