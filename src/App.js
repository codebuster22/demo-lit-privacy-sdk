import logo from "./logo.svg";
import "./App.css";
import * as ethers from "ethers";
import { useState } from "react";
import LitPrivacy from "lit-privacy-sdk";

const gelatoRelayKey = process.env.REACT_APP_GELATO_RELAY_KEY;
const chain = "ethereum";
const publicSignal = "ENS_PROPOSAL_1";
const tokenAddress = "0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85";
const tokenType = "ERC721";
const implemenationChain = "mumbai";
const implementationContract = "0x0588d013012B1E47883e9C720d809e1BdD84f675";
const blockNumber = 33884421;

function App() {
  const [defaultAccount, setDefaultAccount] = useState("");
  const [loading, setLoading] = useState(false);
  const accountChangedHandler = async (newAccount) => {
    const address = await newAccount.getAddress();
    setDefaultAccount(address);
  };
  async function voteSecretly(data) {
    setLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(window?.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const signerAddress = await signer.getAddress();
      console.log(LitPrivacy);

      // instantiate SDK
      const litPrivacyClient = new LitPrivacy(
        provider,
        chain,
        publicSignal,
        tokenAddress,
        blockNumber,
        tokenType
      );
      try {
        await litPrivacyClient.generateProofOfMembership();
      } catch (e) {
        console.log(e);
        console.log("Test 1: Cannot be ran before initialising");
      }

      // initialise sdk
      await litPrivacyClient.initialize();
      console.log(litPrivacyClient);

      // generate payload
      const payload = ethers.utils.defaultAbiCoder.encode(["bool"], [data]);

      // generate proof of membership
      // send proof and vote
      const taskId = await litPrivacyClient.generateProofAndRelayUsingGelato(
        gelatoRelayKey,
        provider,
        implemenationChain,
        implementationContract,
        payload
      );
      alert(`Privately Voted "${data}" for the cause with task ID: ${taskId}`);
      setLoading(false);
    } catch (e) {
      console.log(e);
      alert("Error Occured!");
      setLoading(false);
    }
  }

  return (
    <div className="App">
      <h1>Vote on ENS proposal Secretly using Lit Actions</h1>
      <div className="card">
        <button onClick={() => voteSecretly(true)}>
          {loading ? "Voting..." : "Vote Yes"}
        </button>
        <button onClick={() => voteSecretly(false)}>
          {loading ? "Voting..." : "Vote No"}
        </button>
        <p>
          <a href="https://github.com/Curve-Labs/lit-privacy-sdk/tree/main/packages/lit-privacy-sdk#readme">
            lit-privacy-sdk
          </a>{" "}
          package developed during Lit Protocol's Grant.
        </p>
      </div>
      <p className="read-the-docs">
        Learn more about the package here:{" "}
        <a href="https://github.com/Curve-Labs/lit-privacy-sdk/tree/main/packages/lit-privacy-sdk#readme">
          lit-privacy-sdk
        </a>
      </p>
      <p className="read-the-docs">
        Learn more about Lit Protocol here:{" "}
        <a href="https://litprotocol.com">Lit Protocol</a>
      </p>
      <p className="read-the-docs">
        Developed by <a href="https://curvelabs.eu">Curve Labs</a>
      </p>
    </div>
  );
}

export default App;
