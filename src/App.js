import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main.scss";

import Department from "./pages/Department";
import Facilities from "./pages/Facilities";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Header from "./components/Common/Header";
import FloatingEmergency from "./components/Common/FloatingEmergency";
import Footer from "./components/Common/Footer";
import Appointment from "./pages/Appointment";
import Application from "./pages/Application";
import ScrollToTop from "./components/Common/ScrollToTop";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import MbhMetro from "./pages/MBH-Metro";
import PrivacyPolicy from "./pages/Privacy-Policy";
import TermsCondition from "./pages/Terms-Condition";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/department">
            <Department />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
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
          <Route exact path="/careers/:id">
            <Application />
          </Route>
          <Route exact path="/mbh-metro">
            <MbhMetro />
          </Route>
          <Route exact path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route exact path="/terms-use">
            <TermsCondition />
          </Route>
          <Route path="" component={Home} />
        </Switch>
        <FloatingEmergency />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
