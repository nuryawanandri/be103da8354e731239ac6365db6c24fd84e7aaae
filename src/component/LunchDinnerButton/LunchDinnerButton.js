import React, { useState } from "react";

import { ButtonWrapper, Button } from "./LunchDinnerButton.sc";

import { dayslabel } from "../../utils/constant";

const LunchDinnerButton = () => {
  const [isLunchActive, setIsLunchActive] = useState(true);
  const [dateList, setDateList] = useState([]);

  return (
    <ButtonWrapper>
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

export default LunchDinnerButton;
