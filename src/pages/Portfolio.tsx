import React, { Fragment } from 'react';
import portfolioJson from '../assets/portfolio.json';

interface Photo {
  id: number;
  filePath: string;
  caption: string;
  medium: string;
  subject: string;
  tags: string[];
}

const artBaseUrl: string = 'assets/art/';
const artSmallsBaseUrl: string = 'assets/art/smalls/';

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [enlargedPhoto, setEnlargedPhoto] = React.useState<Photo | null>(null);

  const toggleEnlargedPhoto = (photo: Photo) => {
    setEnlargedPhoto(enlargedPhoto ? null : photo);
  }

  return (
      <div className='art-grid'>
        {photos.map((photo: Photo) => (
            <div key={photo.id} className='item' title={photo.medium}
                 onClick={() => toggleEnlargedPhoto(photo)}
            >
              <div className={'blur-load ' + (enlargedPhoto === photo ? 'enlarged' : '')}
                   style={{
                     backgroundImage: `url(${artSmallsBaseUrl + photo.filePath.substring(0, photo.filePath.indexOf('.'))}-small.jpg)`
                   }}
              >
                <img src={artBaseUrl + photo.filePath} alt={photo.caption} loading='lazy' />
              </div>
              <span className='caption'>{photo.caption}</span>
            </div>
        ))}
      </div>
  );
}

function Portfolio() {
  const [photos, setPhotos] = React.useState<Photo[]>([]);

  React.useEffect(() => {
    try {
      setPhotos(portfolioJson);
    } catch (error) {
      console.error('Error fetching portfolio data: ', error);
    }
  }, []);

  return (
      <Fragment>
        <h2>Portfolio</h2>
        <PhotoGrid photos={photos} />
      </Fragment>
  );
}

export default Portfolio;