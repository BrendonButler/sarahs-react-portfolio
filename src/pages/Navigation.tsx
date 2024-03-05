import { Fragment } from 'react';
import logo from '../assets/slj.svg';
import feature from '../assets/marbles-toto-butterfly.png';
import { Link, useLocation } from 'react-router-dom';

type LinkType = {
  path: string,
  value: string
}

function Navigation() {
  const location = useLocation();
  const activePath: string = location.pathname;
  const links: LinkType[] = [
    { path: '/', value: 'Home' },
    { path: '/works', value: 'View my portfolio' },
    { path: '/contact', value: 'Contact me' }
  ];

  return (
      <Fragment>
        {(( activePath === '/' && <img src={logo} className='app-logo' alt='SLJ logo'/> )
            ||
            <Fragment>
                <h1 className='artist-name'>
                    Sarah Lillian Jamison
                </h1>
                <hr />
            </Fragment>
        )}
        <img src={feature} className='app-feature' alt='marbles and toto butterfly' />
        <ul className='app-link-options'>
          { links.map((link: LinkType, index: number) => (
              link.path !== activePath && (
                <li key={index}>
                  <Link className='app-link' to={link.path}>
                    {link.value}
                  </Link>
                </li>
              )
          ))}
        </ul>
      </Fragment>
  );
}

export default Navigation;