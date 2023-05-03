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
import { GetAnchorTagDataOnPrismicLink } from 'src/utils/adapters/prismic';

const NavbarFullMenu = () => {
  const { theme } = useContext(StylesContext);
  const { brand, navigation } = useContext(AppDataContext);

  React.useEffect(() => {
    initFullNavbarMenu();
  }, []);

  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme.isLight ? 'light' : '') : ''}`}
      >
        <div
          className="container-fluid"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div className="logo">
            <Link href="/" style={{ width: '70%', filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.5))' }}>
              {theme ? (
                theme.isLight ? (
                  <img src={brand.dark_logo} alt="logo" />
                ) : (
                  <img src={brand.light_logo} alt="logo" />
                )
              ) : (
                <img src={brand.light_logo} alt="logo" />
              )}
            </Link>
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
                  {navigation.map((link, idx) => {
                    const LinkName = ({ link, hasSubLinks, prefix }) => {
                      const LinkContainer = hasSubLinks
                        ? ({ children }) => <div>{children}</div>
                        : ({ children }) => (
                            <Link
                              {...GetAnchorTagDataOnPrismicLink(link.url)}
                              className="sub-link"
                            >
                              {children}
                            </Link>
                          );

                      return (
                        <LinkContainer>
                          <span className="nm">
                            {prefix.toLocaleString(2)}.
                          </span>{' '}
                          {link.name}
                          {hasSubLinks && (
                            <span className="fas fa-xs ml-2 fa-angle-right" />
                          )}
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
                                          <i className="fas fa-angle-left" /> Go
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
                    <SocialMediaList
                      component={({ children }) => (
                        <span className="mr-4">{children}</span>
                      )}
                    />
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
