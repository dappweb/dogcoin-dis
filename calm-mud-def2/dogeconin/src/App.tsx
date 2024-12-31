import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/home";
import "./App.css";
import Mine from "./page/mine";
import Item from "./page/item";
import Join from "./page/join";
import Property from "./page/property";
import Community from "./page/community";
import Details from "./page/details";
import Share from "./page/share";
import Team from "./page/team";
import Association from "./page/association";
import Withdraw from "./page/withdraw";
import Convert from "./page/convert";
import Language from "./page/language";
import { WagmiConfig } from 'wagmi';
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { wagmiConfig,  } from './config/wagmi';

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        theme={darkTheme()}
        appInfo={{
          appName: 'DogeCoin App',
        }}
      >
        <BrowserRouter>
          <div>
            <header>
              {/* <WalletConnect /> */}
            </header>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mine" element={<Mine />} />
              <Route path="/item" element={<Item />} />
              <Route path="/join" element={<Join />} />
              <Route path="/property" element={<Property />} />
              <Route path="/community" element={<Community />} />
              <Route path="/details" element={<Details />} />
              <Route path="/share" element={<Share />} />
              <Route path="/team" element={<Team />} />
              <Route path="/association" element={<Association />} />
              <Route path="/withdraw" element={<Withdraw />} />
              <Route path="/convert" element={<Convert />} />
              <Route path="/language" element={<Language />} />
            </Routes>
          </div>
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
