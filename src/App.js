import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Switch>
      <Route path="/" exact><Home /></Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
