import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route path="/home" component={Home } />
        <Route path="/portfolio" component={ Portfolio } />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
