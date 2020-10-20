import React from "react";

import { ContainerBox } from "./App.sc";

import SelectionDate from "./component/SelectionDate/SelectionDate";
import LunchDinnerButton from "./component/LunchDinnerButton/LunchDinnerButton";

function App() {
  return (
    <ContainerBox>
      <div>Location</div>
      <SelectionDate />
      <LunchDinnerButton />
      <div>MenutItem</div>
    </ContainerBox>
  );
}

export default App;
