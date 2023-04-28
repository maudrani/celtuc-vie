import React, { Fragment, useContext } from 'react';
import Link from 'next/link';
import initFullNavbarMenu from '../../common/initFullNavbarMenu';
import { StylesContext } from '@/contexts/styles';
import { AppDataContext } from '@/contexts/appdata';
import { isEmpty } from 'lodash';
import PhonesList from '../Brand/PhonesList';
import AddressList from '../Brand/AdressList';
import MailList from '../Brand/MailList';
import SocialMediaList from '../Brand/SocialMediaList';

const NavbarFullMenu = () => {
  const { theme } = useContext(StylesContext);
  const { brand } = useContext(AppDataContext);

  const links = [
    {
      name: 'Home',
      url: '',
      links: [
        { name: 'Main Home', url: '/homepage/home1', links: [] },
        { name: 'Creative Agency', url: '/homepage/home2', links: [] },
        { name: 'Digital Agency', url: '/homepage/home5', links: [] },
        { name: 'Business One Page', url: '/homepage/home4', links: [] },
        { name: 'Corporate Business', url: '/homepage/home3', links: [] },
        { name: 'Modern Agency', url: '/homepage/home6', links: [] },
        { name: 'Freelancer', url: '/homepage/home7', links: [] },
        { name: 'Architecture', url: '/homepage/home8', links: [] },
      ],
    },
    { name: 'About Us', url: '/about', links: [] },
    {
      name: 'Works',
      url: '',
      links: [
        { name: 'ShowCase Parallax', url: '/showcase/showcase', links: [] },
        { name: 'ShowCase Carousel', url: '/showcase/showcase4', links: [] },
        { name: 'ShowCase Circle', url: '/showcase/showcase3', links: [] },
        { name: 'ShowCase Masonry', url: '/works', links: [] },
        { name: 'Portfolio Filtering', url: '/works2', links: [] },
        { name: 'Portfolio Gallery', url: '/works3', links: [] },
      ],
    },
    {
      name: 'Blogs',
      url: '',
      links: [
        { name: 'Blog Standerd', url: '/blog', links: [] },
        { name: 'Blog List', url: '/blog-list', links: [] },
        { name: 'Blog Grid', url: '/blog-grid', links: [] },
        { name: 'Blog Details', url: '/blog-details', links: [] },
      ],
    },
    { name: 'Contact', url: '/contact', links: [] },
  ];
  
  React.useEffect(() => {
    initFullNavbarMenu();
  }, []);
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme.isLight ? 'light' : '') : ''}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <a href="#0">
              {theme ? (
                theme.isLight ? (
                  <img src={brand.dark_logo} alt="logo" />
                ) : (
                  <img src={brand.light_logo} alt="logo" />
                )
              ) : (
                <img src={brand.light_logo} alt="logo" />
              )}
            </a>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <span className="text" data-splitting>
              <span className="menu-text word">Menu</span>
            </span>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  {links.map((link, idx) => {
                    const LinkName = ({ link, hasSubLinks, prefix }) => {
                      const LinkContainer = hasSubLinks
                        ? ({ children }) => <div>{children}</div>
                        : ({ children }) => (
                            <Link href={link.url} className="sub-link">
                              {children}
                            </Link>
                          );

                      return (
                        <LinkContainer>
                          <span className="nm">
                            {prefix.toLocaleString(2)}.
                          </span>{' '}
                          {link.name}
                          {hasSubLinks && <i className="fas fa-angle-right" />}
                        </LinkContainer>
                      );
                    };

                    return (
                      <li>
                        <div className="o-hidden">
                          <span className="link dmenu">
                            <LinkName
                              link={link}
                              hasSubLinks={!isEmpty(link.links)}
                              prefix={idx + 1}
                            />
                          </span>
                        </div>

                        {!isEmpty(link.links) && (
                          <div className="sub-menu">
                            <ul>
                              {link.links.map((subLink, idx) => (
                                <Fragment key={subLink.id}>
                                  {idx === 0 && (
                                    <li>
                                      <div className="o-hidden">
                                        <span className="sub-link back">
                                          <i className="pe-7s-angle-left" /> Go
                                          Back
                                        </span>
                                      </div>
                                    </li>
                                  )}

                                  <li>
                                    <div className="o-hidden">
                                      <LinkName
                                        link={subLink}
                                        hasSubLinks={!isEmpty(subLink.links)}
                                        prefix={idx + 1}
                                      />
                                    </div>
                                  </li>
                                </Fragment>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                {!isEmpty(brand.phone_number) && (
                  <div className="item">
                    <h6>Phone :</h6>
                    <PhonesList
                      component={({ children }) => <p>{children}</p>}
                    />
                  </div>
                )}
                {!isEmpty(brand.addresses) && (
                  <div className="item">
                    <h6>Address :</h6>
                    <AddressList
                      component={({ children }) => <p>{children}</p>}
                    />
                  </div>
                )}
                {!isEmpty(brand.mails) && (
                  <div className="item">
                    <h6>Email :</h6>
                    <MailList component={({ children }) => <p>{children}</p>} />
                  </div>
                )}
                {!isEmpty(brand.mails) && (
                  <div className="item">
                    <SocialMediaList component={({ children }) => <span className='mr-4'>{children}</span>}/>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
