import React from "react";
import { connect } from "react-redux";

import { setIsCartOpen } from "../../reducer/cart";

import Rating from "./Rating/Rating";

import {
  ContainerItem,
  ImgBox,
  ContainerDetail,
  TitleItem,
  SubTitleItem,
  ContainerFooter,
  PriceLabel,
  ButtonAdd,
  AddLabel,
  PlusIcon,
} from "./MenuItem.sc";

const MenuItem = (props) => {
  return (
    <ContainerItem>
      <ImgBox src="/assets/Food_1.jpg" />
      <ContainerDetail>
        <Rating />
        <TitleItem>Roasted Chicken with Scrambled Egg</TitleItem>
        <SubTitleItem>by Kulina . Upwtown lunch</SubTitleItem>
        <ContainerFooter>
          <PriceLabel>Rp. 35.000</PriceLabel>
          <ButtonAdd>
            <AddLabel onClick={props.setIsCartOpen(true)}>ADD</AddLabel>
            <PlusIcon />
          </ButtonAdd>
        </ContainerFooter>
      </ContainerDetail>
    </ContainerItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
