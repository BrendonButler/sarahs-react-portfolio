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

export function PhotoGrid() {
  const [photos, setPhotos] = React.useState<Photo[]>([]);

  React.useEffect(() => {
    setPhotos(portfolioJson);
  }, []);

  return (
      <div className='art-grid'>
        {photos.map((photo: Photo) => (
            <div key={photo.id} className='item' title={photo.medium}>
              <div className='blur-load'
                   style={{ backgroundImage: `url(assets/art/smalls/${photo.filePath.substring(0, photo.filePath.indexOf('.'))}-small.jpg)` }}
              >
                <img src={'assets/art/' + photo.filePath} alt={photo.caption} loading='lazy' />
              </div>
              <span className='caption'>{photo.caption}</span>
            </div>
        ))}
      </div>
  );
}

function Portfolio() {
    return (
        <Fragment>
          <h2>Portfolio</h2>
          <PhotoGrid />
        </Fragment>
    );
}

export default Portfolio;