import "./Header.css";
import logo from "../../Assets/images/logo.png";
import NavItem, { NavItemDropDown } from "../../Components/NavItem/NavItem";

function Header() {
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-dark  cyborg-navbar  fixed-top">
      <div className="container ">
        <a href={URL} className="navbar-brand ">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a href="#hero" className="nav-link text-light">
                Get Started
              </a>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link text-light">
                Features
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle text-light"
                data-bs-toggle="dropdown"
              >
                Learn
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#learn" className="dropdown-item text-light">
                    Learn Bootstrap
                  </a>
                </li>
                <li>
                  <a href="#next" className="dropdown-item text-light">
                    Where to go next
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#faq" className="nav-link text-light">
                Ask Me
              </a>
            </li>
            <li className="nav-item">
              <a href="./index-ar.html" className="nav-link text-light">
                عربي
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
