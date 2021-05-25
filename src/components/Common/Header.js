import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function Header() {
  const dotLink = useRef(null);
  const location = useLocation();
  const [pathLocation, setLocation] = useState("/home");
  const [activeNav, setActiveNav] = useState(false);
  const [isNavOpen, setOpenNav] = useState(false);

  useEffect(() => {
    if (pathLocation) {
      if (pathLocation === "/") {
        dotLink.current.style.left = "6%";
      } else if (pathLocation === "/department") {
        dotLink.current.style.left = "28%";
      } else if (pathLocation === "/gallery") {
        dotLink.current.style.left = "53%";
      } else if (pathLocation === "/facilities") {
        dotLink.current.style.left = "72%";
      } else if (pathLocation === "/careers") {
        dotLink.current.style.left = "93%";
      }
    }
  }, [pathLocation]);

  const changeNav = () => {
    let windoScrollY = window.scrollY;
    let changeScrollY = 500;
    pathLocation === "/" ? (changeScrollY = 500) : (changeScrollY = 100);
    if (windoScrollY > changeScrollY) {
      setActiveNav(true);
    } else {
      setActiveNav(false);
    }
  };

  window.addEventListener("scroll", changeNav);
  //console.log(location.pathname);

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
                to="/gallery"
                // isActive={(match, location) => {
                //   setLocation(location.pathname);
                // }}
                activeClassName="active-link"
              >
                Gallery
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
          {location.pathname === "/" ? (
            !activeNav ? (
              <span
                className="contactUsBtn"
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    left: 0,
                    behavior: "smooth",
                  })
                }
              >
                Contact Us
              </span>
            ) : (
              <Link to="/appointment" className="bookAptBtn">
                Book Appointment
              </Link>
            )
          ) : (
            <Link to="/appointment" className="bookAptBtn">
              Book Appointment
            </Link>
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
                onClick={() => setOpenNav(!isNavOpen)}
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
                onClick={() => setOpenNav(!isNavOpen)}
                to="/department"
                activeClassName="active-link"
              >
                Departments
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setOpenNav(!isNavOpen)}
                to="/facilities"
                activeClassName="active-link"
              >
                Facilities
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setOpenNav(!isNavOpen)}
                to="/careers"
                activeClassName="active-link"
              >
                Careers
              </NavLink>
            </li>
            <li className="bookAptBtn">
              <NavLink
                onClick={() => setOpenNav(!isNavOpen)}
                to="/appointment"
                activeClassName="active-link"
              >
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
