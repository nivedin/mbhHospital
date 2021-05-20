import { ReactComponent as MapSvg } from "./assets/mapSvg.svg";
import { ReactComponent as FacebookSvg } from "./assets/facebook.svg";
import { ReactComponent as TwitterSvg } from "./assets/twitter.svg";
import { ReactComponent as MailSvg } from "./assets/mail.svg";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footerRow1">
        <div className="leftRow1">
          <Link to="/contact">24/7 Emergency</Link>
          <Link to="/contact">Help Desk</Link>
        </div>
        <div className="rightRow1">
          <a href="/">
            <span>
              Navigate to <strong>MBH</strong>{" "}
            </span>
            <span>
              <MapSvg />
            </span>
          </a>
        </div>
      </div>
      <div className="footerRow2">
        <div className="footerLinks">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/facilities" activeClassName="active-link">
                Facilities
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/careers" activeClassName="active-link">
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/departments" activeClassName="active-link">
                Departments
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="socialLinkConatiner">
          <p>Follow Us</p>
          <div className="socialLinks">
            <a href="https://www.facebook.com/MB-Hospital-104202173769193/">
              <FacebookSvg />
            </a>
            <a href="/">
              <TwitterSvg />
            </a>
            <a href="mailto:hrmbhospital@gmail.com">
              <MailSvg />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>&#169; 2021 MBH All right reserved</p>
        <p>
          Powered by <a href="htpps://www.odditty.com">Odditty</a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
