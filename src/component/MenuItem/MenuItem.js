import React from "react";
import AddIcon from "@material-ui/icons/Add";

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

const MenuItem = () => {
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
            <AddLabel>ADD</AddLabel>
            <PlusIcon />
          </ButtonAdd>
        </ContainerFooter>
      </ContainerDetail>
    </ContainerItem>
  );
};

export default MenuItem;
