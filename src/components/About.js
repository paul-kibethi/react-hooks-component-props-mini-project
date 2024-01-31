import React from 'react';

function About({ imageSrc, about }) {
  const defaultImageSrc = 'https://via.placeholder.com/215';

  return (
    <aside>
      <img src={imageSrc || defaultImageSrc} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;