import React from "react";

import { ContainerBox } from "./App.sc";

import LunchDinnerButton from "./component/LunchDinnerButton/LunchDinnerButton";

function App() {
  return (
    <ContainerBox>
      <div>Location</div>
      <div>SelectionDate</div>
      <LunchDinnerButton />
      <div>MenutItem</div>
    </ContainerBox>
  );
}

export default App;
