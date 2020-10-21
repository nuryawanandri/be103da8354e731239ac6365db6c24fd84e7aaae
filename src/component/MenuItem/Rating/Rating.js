import React from "react";

import { ConatinerRating, RatingValue, FullStar, HalfStar } from "./Rating.sc";

const Rating = () => {
  return (
    <ConatinerRating>
      <RatingValue>4.5</RatingValue>
      <FullStar />
      <FullStar />
      <FullStar />
      <FullStar />
      <HalfStar />
    </ConatinerRating>
  );
};

export default Rating;
