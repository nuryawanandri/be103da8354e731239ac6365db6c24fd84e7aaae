import React, { useState } from "react";

import { ButtonWrapper, Button } from "./LunchDinnerButton.sc";

const LunchDinnerButton = () => {
  const [isLunchActive, setIsLunchActive] = useState(true);

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
