import '../styles/components.less';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';
import { useIsHomePage } from '../hooks/SharedHooks';

function Social() {
  const isHomePage = useIsHomePage();
  const instagramURL = "https://www.instagram.com/";
  const linkedInURL = "https://www.linkedin.com/";

  return (
      <div className={"social-links " + (isHomePage ? "" : "narrow")}>
        <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
          <img src={linkedin} className="social-logo" alt="linkedin" title="View my LinkedIn!" />
        </a>
        <a href={instagramURL} target="_blank" rel="noopener noreferrer">
          <img src={instagram} className="social-logo" alt="instagram" title="View my Instagram!" />
        </a>
      </div>
  );
}

export default Social;