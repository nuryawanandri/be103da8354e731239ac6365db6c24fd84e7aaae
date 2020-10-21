import React, { useState } from "react";
import { connect } from "react-redux";

import { ButtonWrapper, Button } from "./LunchDinnerButton.sc";

const LunchDinnerButton = (props) => {
  const [isLunchActive, setIsLunchActive] = useState(true);

  return (
    <ButtonWrapper isOpenbtn={props.isOpenBtn}>
      <Button
        isActive={isLunchActive}
        onClick={() => {
          setIsLunchActive(true);
        }}
      >
        Lunch
      </Button>
      <Button
        isActive={!isLunchActive}
        onClick={() => {
          setIsLunchActive(false);
        }}
      >
        Dinner
      </Button>
    </ButtonWrapper>
  );
};

const mapStateToProps = (state) => ({
  isOpenBtn: state.lunchDinnerBtn.isOpenBtn,
});

export default connect(mapStateToProps)(LunchDinnerButton); 
