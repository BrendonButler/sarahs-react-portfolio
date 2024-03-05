import '../styles/components.less';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';

function Social(props: { isNarrow: boolean }) {
  const instagramURL: string = 'https://www.instagram.com/';
  const linkedInURL: string = 'https://www.linkedin.com/';

  return (
      <div className={'social-links ' + (props.isNarrow ? 'narrow' : '')}>
        <a href={linkedInURL} target='_blank' rel='noopener noreferrer'>
          <img src={linkedin} className='social-logo' alt='linkedin' title='View my LinkedIn!' />
        </a>
        <a href={instagramURL} target='_blank' rel='noopener noreferrer'>
          <img src={instagram} className='social-logo' alt='instagram' title='View my Instagram!' />
        </a>
      </div>
  );
}

export default Social;