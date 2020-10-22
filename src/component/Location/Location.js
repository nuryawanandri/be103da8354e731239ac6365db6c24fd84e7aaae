import React from "react";
import { connect } from "react-redux";

import { setIsModalLocOpen } from "../../reducer/modalLocation";

import {
  LocationConatiner,
  ArrowLeftIcon,
  DescLoc,
  LocationDetail,
  ExpandIcon,
} from "./Location.sc";

const Location = (props) => (
  <LocationConatiner>
    <ArrowLeftIcon>icon arrow left</ArrowLeftIcon>
    <div onClick={props.setIsModalLocOpen(true)}>
      <DescLoc>ALAMAT PENGANTAR</DescLoc>
      <LocationDetail>
        Tokopedia Tower <ExpandIcon />
      </LocationDetail>
    </div>
  </LocationConatiner>
);

const mapDispatchToProps = (dispatch) => ({
  setIsModalLocOpen(data) {
    return () => {
      dispatch(setIsModalLocOpen(data));
    };
  },
});

export default connect(null, mapDispatchToProps)(Location);
