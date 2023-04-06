import React, { useContext, useEffect, useRef } from 'react';
import Link from 'next/link';
import appData from '../../data/app.json';
import { handleDropdown, handleMobileDropdown } from '../../common/navbar';
import { StylesContext } from '@/contexts/styles';

const Navbar = ({ lr, nr }) => {
  const { theme, toggleMobileAppStyle, changeTheme, toggleSkinStyle } =
    useContext(StylesContext);

  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    const navbar = navbarRef.current,
      logo = logoRef.current;

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
    <nav
      ref={nr || navbarRef}
      className={`navbar navbar-expand-lg change ${theme.themeName}`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme.isLight ? (
                <img ref={lr || logoRef} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr || logoRef} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr || logoRef} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 2em',
          }}
        >
          <span>Dark</span>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={e => changeTheme(e.target.checked ? 'dark' : 'light')}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 2em',
          }}
        >
          <span>Skin</span>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={e => toggleSkinStyle(e.target.checked)}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0 2em',
          }}
        >
          <span>Mobile app</span>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={e => toggleMobileAppStyle(e.target.checked)}
          />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
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
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link href={`/homepage/home1-dark`}>
                  <a className="dropdown-item">Main Home</a>
                </Link>
                <Link href={`/homepage/home2-dark`}>
                  <a className="dropdown-item">Creative Agency</a>
                </Link>
                <Link href={`/homepage/home5-dark`}>
                  <a className="dropdown-item">Digital Agency</a>
                </Link>
                <Link href={`/homepage/home4-dark`}>
                  <a className="dropdown-item">Business One Page</a>
                </Link>
                <Link href={`/homepage/home3-dark`}>
                  <a className="dropdown-item">Corporate Business</a>
                </Link>
                <Link href={`/homepage/home6-dark`}>
                  <a className="dropdown-item">Modern Agency</a>
                </Link>
                <Link href={`/homepage/home7-dark`}>
                  <a className="dropdown-item">Freelancer</a>
                </Link>
                <Link href={`/homepage/home8-dark`}>
                  <a className="dropdown-item">Architecture</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href={`/about/about`}>
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </span>
              <div className="dropdown-menu">
                <Link href={`/showcase/showcase-dark`}>
                  <a className="dropdown-item">Showcase Parallax</a>
                </Link>
                <Link href={`/showcase4/showcase4-dark`}>
                  <a className="dropdown-item">Showcase Carousel</a>
                </Link>
                <Link href={`/showcase3/showcase3-dark`}>
                  <a className="dropdown-item">Showcase Circle</a>
                </Link>
                <Link href={`/works/works-dark`}>
                  <a className="dropdown-item">Portfolio Masonry</a>
                </Link>
                <Link href={`/works2/works2-dark`}>
                  <a className="dropdown-item">Portfolio Filtering</a>
                </Link>
                <Link href={`/works3/works3-dark`}>
                  <a className="dropdown-item">Portfolio Gallery</a>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </span>
              <div className="dropdown-menu">
                <Link href={`/blog/blog-dark`}>
                  <a className="dropdown-item">Blog Standerd</a>
                </Link>
                <Link href={`/blog-list/blog-list-dark`}>
                  <a className="dropdown-item">Blog List</a>
                </Link>
                <Link href={`/blog-grid/blog-grid-dark`}>
                  <a className="dropdown-item">Blog Grid</a>
                </Link>
                <Link href={`/blog-details/blog-details-dark`}>
                  <a className="dropdown-item">Blog Details</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href={`/contact/contact-dark`}>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
