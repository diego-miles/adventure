// "use client"
import { useState } from 'react';

const LocationComponent = () => {
  return (
    <div>
      <p>Location of the business:</p>
      <iframe
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAx3hj2ODdkgRgSwZo_EpU64"
      ></iframe>
    </div>
  );
};

export default LocationComponent;

