import React from "react";

import { ContainerBox } from "./App.sc";

import SelectionDate from "./component/SelectionDate/SelectionDate";
import LunchDinnerButton from "./component/LunchDinnerButton/LunchDinnerButton";
import MenuItem from "./component/MenuItem/MenuItem";
import ActiveDate from "./component/ActiveDate/ActiveDate";

function App() {
  return (
    <ContainerBox>
      <div>Location</div>
      <SelectionDate />
      <LunchDinnerButton />
      <ActiveDate />
      <div>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </ContainerBox>
  );
}

export default App;
