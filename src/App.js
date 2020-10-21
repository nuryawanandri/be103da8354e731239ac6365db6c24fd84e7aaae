import React from "react";

import { ContainerBox, ContainerContent, ContainerApps } from "./App.sc";

import SelectionDate from "./component/SelectionDate/SelectionDate";
import LunchDinnerButton from "./component/LunchDinnerButton/LunchDinnerButton";
import MenuItem from "./component/MenuItem/MenuItem";
import ActiveDate from "./component/ActiveDate/ActiveDate";
import PopUpCart from "./component/PopUpCart/PopUpCart";

function App() {
  return (
    <ContainerBox>
      <ContainerContent>
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
      </ContainerContent>
      <PopUpCart />
    </ContainerBox>
  );
}

export default App;
