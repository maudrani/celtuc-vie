import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import appData from '../../data/app.json';
import { handleDropdown, handleMobileDropdown } from '../../common/navbar';
import { StylesContext } from '@/contexts/styles';

const NavbarArch = () => {
  const { theme } = useContext(StylesContext);
  const navbarRef = React.useRef(null);

  React.useEffect(() => {
    const navbar = navbarRef.current;

    if (!navbar) return;

    if (window.pageYOffset > 300) {
      navbar.classList.add('nav-scroll');
    } else {
      navbar.classList.remove('nav-scroll');
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll');
      } else {
        navbar.classList.remove('nav-scroll');
      }
    });
  }, [navbarRef]);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="logo" href="/">
          {theme ? (
            !theme.isLight ? (
              <img src={appData.brand.dark_logo} alt="logo" />
            ) : (
              <img src={appData.brand.light_logo} alt="logo" />
            )
          ) : (
            <img src={appData.brand.light_logo} alt="logo" />
          )}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={handleMobileDropdown}
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                data-scroll-nav="0"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <a className="dropdown-item" href={`/homepage/home1-dark`}>
                  Main Home
                </a>
                <a className="dropdown-item" href={`/homepage/home2-dark`}>
                  Creative Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home5-dark`}>
                  Digital Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home4-dark`}>
                  Business One Page
                </a>
                <a className="dropdown-item" href={`/homepage/home3-dark`}>
                  Corporate Business
                </a>
                <a className="dropdown-item" href={`/homepage/home6-dark`}>
                  Modern Agency
                </a>
                <a className="dropdown-item" href={`/homepage/home7-dark`}>
                  Freelancer
                </a>
                <a className="dropdown-item" href={`/homepage/home8-dark`}>
                  Architecture
                </a>
              </div>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="po-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="team-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="testimonials-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="blog-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch;
