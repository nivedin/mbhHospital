import { ReactComponent as MapSvg } from "./assets/mapSvg.svg";
import { ReactComponent as FacebookSvg } from "./assets/facebook.svg";
import { ReactComponent as InstagramSvg } from "./assets/instagram.svg";
import { ReactComponent as MailSvg } from "./assets/mail.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer id="#footer">
      <div className="footerRow1">
        <div className="leftRow1">
          <a href="tel:9526903838">24/7 Emergency</a>
          <a href="tel:04832734543">Help Desk</a>
        </div>
        <div className="rightRow1">
          <a href="https://goo.gl/maps/VtTPN7ALcLrivkG4A">
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
              <NavLink exact to="/gallery" activeClassName="active-link">
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/careers" activeClassName="active-link">
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/department" activeClassName="active-link">
                Departments
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="socialLinkConatiner">
          <p>Follow Us</p>
          <div className="socialLinks">
            <a href="https://www.facebook.com/mbhospitalmlp/">
              <FacebookSvg />
            </a>
            <a href="https://www.instagram.com/mb.hospital/">
              <InstagramSvg />
            </a>
            <a href="mailto:hrmbhospital@gmail.com">
              <MailSvg />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>
          &#169; 2021 <strong style={{ color: "#005ea4" }}>MBH</strong> All
          right reserved
        </p>
        <p>
          Powered by <a href="https://sparkd.pro/">Sparkd</a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
