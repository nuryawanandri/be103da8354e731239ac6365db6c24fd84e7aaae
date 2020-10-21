import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";

import { dayslabel } from "../../utils/constant";

import {
  WrapperDate,
  DateCell,
  DayLabel,
  DateNumber,
  DateContainer,
} from "./SelectionDate.sc";

const SelectionDate = (props) => {
  const wrapperDateRef = useRef(null);
  const containerDateRef = useRef(null);

  useEffect(() => {
    wrapperDateRef.current.scrollLeft =
      (containerDateRef.current.clientWidth -
        wrapperDateRef.current.clientWidth) /
      2;
    console.log(containerDateRef);
    console.log(wrapperDateRef);
  });

  return (
    <WrapperDate ref={wrapperDateRef}>
      <DateContainer ref={containerDateRef}>
        {props.listDate.map((dateItem, index) => (
          <DateCell
            key={index}
            isSelected={props.selectedDate.getTime() === dateItem.getTime()}
          >
            <DayLabel>{dayslabel[dateItem.getDay()]}</DayLabel>
            <DateNumber>{dateItem.getDate()}</DateNumber>
          </DateCell>
        ))}
      </DateContainer>
    </WrapperDate>
  );
};

const mapStateToProps = (state) => ({
  listDate: state.selectionDate.listDate,
  selectedDate: state.selectionDate.selectedDate,
});

export default connect(mapStateToProps)(SelectionDate);
