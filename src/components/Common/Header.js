import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const dotLink = useRef(null);
  const [pathLocation, setLocation] = useState("/home");
  const [activeNav, setActiveNav] = useState(false);
  const [isNavOpen, setOpenNav] = useState(false);

  useEffect(() => {
    if (pathLocation) {
      if (pathLocation === "/") {
        dotLink.current.style.left = "6%";
      } else if (pathLocation === "/department") {
        dotLink.current.style.left = "35%";
      } else if (pathLocation === "/facilities") {
        dotLink.current.style.left = "65%";
      } else if (pathLocation === "/careers") {
        dotLink.current.style.left = "91%";
      }
    }
  }, [pathLocation]);

  const changeNav = () => {
    let windoScrollY = window.scrollY;
    if (windoScrollY > 500) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };

  window.addEventListener("scroll", changeNav);

  return (
    <nav>
      <div className={activeNav ? "activeNav navContainer" : "navContainer"}>
        <div className="navLogo">
          <Link to="/">
            <img src="/images/MbH-Logo.png" alt="navLogo" />
          </Link>
        </div>
        <div className="navLinks">
          <ul>
            <span ref={dotLink}></span>
            <li>
              <NavLink
                to="/"
                activeClassName="active-link"
                isActive={(match, location) => {
                  setLocation(location.pathname);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/department"
                // isActive={(match, location) => {
                //   setLocation(location.pathname);
                // }}
                activeClassName="active-link"
              >
                Departments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/facilities"
                // isActive={(match, location) => {
                //   setLocation(location.pathname);
                // }}
                activeClassName="active-link"
              >
                Facilities
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/careers"
                // isActive={(match, location) => {
                //   setLocation(location.pathname);
                // }}
                activeClassName="active-link"
              >
                Careers
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navButton">
          <div className="mobHeadHamBtn">
            <span onClick={() => setOpenNav(!isNavOpen)}></span>
          </div>
          {!activeNav ? (
            <Link to="/contact">Contact Us</Link>
          ) : (
            <Link to="/appointments">Book Appointment</Link>
          )}
        </div>
      </div>

      <div className={isNavOpen ? "mobHeader navOpen" : "mobHeader"}>
        <div className="mobHeaderContainer">
          <div className="mobHeadCloseBtn">
            <span onClick={() => setOpenNav(!isNavOpen)}></span>
          </div>
          <ul>
            <li>
              <NavLink
                to="/"
                activeClassName="active-link"
                isActive={(match, location) => {
                  setLocation(location.pathname);
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/department" activeClassName="active-link">
                Departments
              </NavLink>
            </li>
            <li>
              <NavLink to="/facilities" activeClassName="active-link">
                Facilities
              </NavLink>
            </li>
            <li>
              <NavLink to="/careers" activeClassName="active-link">
                Careers
              </NavLink>
            </li>
            <li className="bookAptBtn">
              <NavLink to="/appointments" activeClassName="active-link">
                Book Appointments
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
