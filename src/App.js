import React from "react";

import { ContainerBox, ContainerContent, ContainerApps } from "./App.sc";

import SelectionDate from "./component/SelectionDate/SelectionDate";
import LunchDinnerButton from "./component/LunchDinnerButton/LunchDinnerButton";
import MenuItem from "./component/MenuItem/MenuItem";
import ActiveDate from "./component/ActiveDate/ActiveDate";
import PopUpCart from "./component/PopUpCart/PopUpCart";
import Location from "./component/Location/Location";
import ContainerMenu from "./component/ContainerMenu/ContainerMenu";

function App() {
  return (
    <ContainerBox>
      <ContainerContent>
        <Location />
        <SelectionDate />
        <ContainerMenu>
          <LunchDinnerButton />
          <ActiveDate />
          <div>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </ContainerMenu>
      </ContainerContent>
      <PopUpCart />
    </ContainerBox>
  );
}

export default App;
