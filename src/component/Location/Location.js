import React from "react";
import { connect } from "react-redux";

import {
  LocationConatiner,
  ArrowLeftIcon,
  DescLoc,
  LocationDetail,
  ExpandIcon,
} from "./Location.sc";

const Location = () => (
  <LocationConatiner>
    <ArrowLeftIcon>icon arrow left</ArrowLeftIcon>
    <div>
      <DescLoc>ALAMAT PENGANTAR</DescLoc>
      <LocationDetail>
        Tokopedia Tower <ExpandIcon />
      </LocationDetail>
    </div>
  </LocationConatiner>
);

export default Location;
