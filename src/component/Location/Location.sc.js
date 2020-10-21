import styled from "styled-components";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const LocationConatiner = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowLeftIcon = styled(ArrowBackOutlinedIcon)`
  && {
    font-size: 28px;
    margin-right: 16px;
  }
`;

export const DescLoc = styled.div`
  font-size: 8px;
  color: #6e7679;
`;

export const LocationDetail = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: #6e7679;
  display: flex;
  align-items: center;
`;

export const ExpandIcon = styled(ExpandMoreIcon)`
  && {
    font-size: 24px;
    color: #f9423a;
  }
`;
