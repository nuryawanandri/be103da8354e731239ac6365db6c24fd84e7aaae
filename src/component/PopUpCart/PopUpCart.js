import React from "react";
import { connect } from "react-redux";

import { setIsCartOpen } from "../../reducer/cart";

import {
  CartContainer,
  CartDetailContainer,
  DetailItem,
  DescCart,
  CartIcon,
  ArrowRightIcon,
  IconContainer,
} from "./PopUpCart.sc";

const PopUpCart = (props) => {
  return (
    <CartContainer isCartOpen={props.isCartOpen}>
      <CartDetailContainer>
        <div>
          <DetailItem>5 items | Rp. 125,000</DetailItem>
          <DescCart>Termasuk ongkos kirim</DescCart>
        </div>
        <IconContainer onClick={props.setIsCartOpen(false)}>
          <CartIcon />
          <ArrowRightIcon />
        </IconContainer>
      </CartDetailContainer>
    </CartContainer>
  );
};

const mapStateToProps = (state) => ({
  isCartOpen: state.cart.isCartOpen,
});

const mapDispatchToProps = (dispatch) => ({
  setIsCartOpen(data) {
    return () => {
      dispatch(setIsCartOpen(data));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PopUpCart);
