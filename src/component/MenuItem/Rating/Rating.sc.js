import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

export const ConatinerRating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const RatingValue = styled.div`
  color: #6e7679;
  font-size: 14px;
  margin-right: 4px;
  font-weight: 600;
`;

export const FullStar = styled(StarIcon)`
  && {
    font-size: 14px;
    color: #f9423a;
  }
`;

export const HalfStar = styled(StarHalfIcon)`
  && {
    font-size: 14px;
    color: #f9423a;
  }
`;
