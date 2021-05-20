import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main.scss";

import Department from "./pages/Department";
import Facilities from "./pages/Facilities";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Header from "./components/Common/Header";
import FloatingEmergency from "./components/Common/FloatingEmergency";
import Footer from "./components/Common/Footer";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/department">
            <Department />
          </Route>
          <Route exact path="/facilities">
            <Facilities />
          </Route>
          <Route exact path="/careers">
            <Careers />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/appointment">
            <Appointment />
          </Route>
        </Switch>
        <FloatingEmergency />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
