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
          <p>
            <span>24/7 Emergency</span>
            <span>:</span>
            <a href="tel:9526903838">9526903838</a>
          </p>
          <p className="helpDeskNum">
            <span>Help Desk</span>
            <span>: </span>
            <a href="tel:04832883333"> 04832883333</a>
          </p>
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
          <p className="address">
            MBH Hospital LLP, <br />
            8/559, 562A, <br />
            Varangode, Downhill P.O, <br />
            Malappuram, Malappuram, Kerala, <br />
            676519, India
          </p>
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
            <li>
              <NavLink exact to="/contact" activeClassName="active-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="socialLinkConatiner">
          <div className="accreditedImg">
            <div className="footerAcrrLogoContainer">
              <span className="nabhLogoNum">
                <img src="/images/NABH.jpeg" alt="NABHaccriditedLogo" />
                <small>PEH-2021-1498</small>
              </span>
              <img src="/images/accreditedLogo.png" alt="accriditedLogo" />
            </div>
            <span>
              {" "}
              NABH Accredited <br />
              NABL and ICMR Approved laboratory
            </span>
          </div>
          <div>
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
      </div>
      <div className="footer">
        <p>
          &#169; 2021 <strong style={{ color: "#005ea4" }}>MBH</strong> All
          right reserved
        </p>
        <p className="privacyTerms">
          <a href="/privacy-policy">Privacy Policy</a>
          <span>•</span>
          <a href="/terms-use">Terms of Use</a>
        </p>
        <p className="poweredBy">
          Powered by <a href="https://sparkd.pro/">Sparkd</a>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
