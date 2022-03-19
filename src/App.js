import Navigation from './components/Navigation.js'
import HomePage from './components/HomePage/HomePage'
import Vote from './components/VotePage/VotePage'
import {Footer} from './components/footer/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ContributionPage from './components/ContributePage/ContributionPage';
import {ThirdwebProvider} from '@3rdweb/react'

function App() {
  const supportedChainIds = [4, 80001];

  const connectors = {
    injected: {},
    magic: {
      apiKey: "pk_...",
      chainId: 1, 
    },
    walletconnect: {},
    walletlink: {
      appName: "thirdweb - demo",
      url: "https://thirdweb.com",
      darkMode: false,
    },
  };

  const application = (
    <Router>
      <div className="App">
        {/* Navbar is always going to be here */}
        <Navigation />
        <div className="content">
          <Switch>  {/*  A switch statement to select the route of the website */}
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/vote">
              <Vote />
            </Route>
            <Route exact path="/contribute">
              <ContributionPage />
            </Route>
          </Switch>
        </div>
        {/* The Current Footer that is here */}
        <Footer />
      </div>
    </Router>
    
  );
  return (
    <ThirdwebProvider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      {application}
    </ThirdwebProvider>
  )
}

export default App;
