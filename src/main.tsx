import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@polkadot-cloud/core/accent/polkadot-relay.css";
import "@polkadot-cloud/core/theme/default/index.css";
import '@polkadot-cloud/core/css/styles/index.css';

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
