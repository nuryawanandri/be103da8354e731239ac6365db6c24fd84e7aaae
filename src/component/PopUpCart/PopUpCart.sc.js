import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const CartContainer = styled.div`
  position: fixed;
  bottom: ${(props) => (props.isCartOpen ? "0px" : "-80px")};
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  width: 100%;
  height: 73px;
  transition: 0.1s ease-in;
`;

export const CartDetailContainer = styled.div`
  width: calc(100% - 45px);
  height: 30px;
  background-color: #a23530;
  left: 0px;
  margin-left: 12px;
  border-radius: 8px;
  padding: 12px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
`;

export const DetailItem = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const DescCart = styled.div`
  font-size: 14px;
`;

export const CartIcon = styled(ShoppingCartOutlinedIcon)`
  && {
    color: #ffffff;
  }
`;

export const ArrowRightIcon = styled(ArrowForwardIosIcon)`
  && {
    color: #ffffff;
    font-size: 14px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
