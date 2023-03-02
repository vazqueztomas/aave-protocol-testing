const express = require("express");
const server = express();

server.get("/", (req, res) => {
  return res.json("Ratherlabs API");
});
server.use("/balances", require("./routes/balances"));
// Log the ABI into console
// console.log(PoolV3Artifact.abi);

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
