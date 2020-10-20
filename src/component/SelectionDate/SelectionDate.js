import React from "react";

import {
  WrapperDate,
  DateCell,
  DayLabel,
  DateNumber,
  DateContainer,
} from "./SelectionDate.sc";

const SelectionDate = () => {
  return (
    <WrapperDate>
      <DateContainer>
        <DateCell>
          <DayLabel>Sen</DayLabel>
          <DateNumber>10</DateNumber>
        </DateCell>
        <DateCell>
          <DayLabel>Sen</DayLabel>
          <DateNumber>10</DateNumber>
        </DateCell>
        <DateCell>
          <DayLabel>Sen</DayLabel>
          <DateNumber>10</DateNumber>
        </DateCell>
        <DateCell isSelected>
          <DayLabel>Sen</DayLabel>
          <DateNumber>10</DateNumber>
        </DateCell>
        <DateCell>
          <DayLabel>Sen</DayLabel>
          <DateNumber>10</DateNumber>
        </DateCell>
        <DateCell>
          <DayLabel>Sen</DayLabel>
          <DateNumber>10</DateNumber>
        </DateCell>
        <DateCell>
          <DayLabel>Sen</DayLabel>
          <DateNumber>10</DateNumber>
        </DateCell>
        <DateCell>
          <DayLabel>Sen</DayLabel>
          <DateNumber>10</DateNumber>
        </DateCell>
      </DateContainer>
    </WrapperDate>
  );
};

export default SelectionDate;
