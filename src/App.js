import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Home from './components/Home';
import { WagmiConfig } from 'wagmi';
import { chains, wagmiConfig } from './components/ConnectWallet/ConnectWallet';
import { RainbowKitProvider, midnightTheme } from '@rainbow-me/rainbowkit';

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={midnightTheme()}>
        <Router>
          <Sidebar />
          <Switch>
            <Route path='/home' exact component={Overview} />
            <Route path='/about' exact component={Reports} />
            <Route path='/dashboard' exact component={ReportsOne} />
            <Route path='/reports/reports2' exact component={ReportsTwo} />
            <Route path='/reports/reports3' exact component={ReportsThree} />
            <Route path='/team' exact component={Team} />
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
