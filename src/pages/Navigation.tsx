import { Fragment } from 'react';
import logo from '../assets/slj.svg';
import feature from '../assets/marbles-toto-butterfly.png';
import { useIsHomePage } from '../hooks/SharedHooks';

function Navigation() {
  const isHomePage = useIsHomePage();

  return (
      <Fragment>
        {( isHomePage && <img src={logo} className="app-logo" alt="SLJ logo" />)
            ||
            <Fragment>
                <h1 className="artist-name">
                    Sarah Lillian Jamison
                </h1>
                <hr />
            </Fragment>
        }
        <img src={feature} className="app-feature" alt="marbles and toto butterfly" />
        <ul className="app-link-options">
          { !isHomePage &&
            <li>
                <a className="app-link" href="/">
                    Home
                </a>
            </li>
          }
          <li>
            <a className="app-link" href="./works">
              View my works!
            </a>
          </li>
          <li>
            <a className="app-link" href="./contact">
              Contact me
            </a>
          </li>
        </ul>
      </Fragment>
  );
}

export default Navigation;