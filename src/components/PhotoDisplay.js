import React from 'react';

const PhotoDisplay = ({ photoUrl, caption }) => {
  return (
    <>
      <div className="photo-display">
        <img src={photoUrl} alt={""} />
      </div>

      <p>{caption}</p>
    </>
  );
};

export default PhotoDisplay;