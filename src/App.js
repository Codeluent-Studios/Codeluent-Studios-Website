import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Games from './pages/Games';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Switch>
      <Route path="/" exact><Home /></Route>
      <Route path="/privacy"><PrivacyPolicy /></Route>
      <Route path="/games" exact><Games /></Route>
      <Route path="/contact" exact><Contact /></Route>
     </Switch>
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
