import styled from "styled-components";

export const WrapperDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  overflow-x: scroll;
  margin-bottom: 16px;
`;

export const DateContainer = styled.div`
  display: flex;
`;

export const DateCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => (props.isSelected ? "#f1f1f2" : "#424749")};
  border: 1px solid ${(props) => (props.isSelected ? "#424749" : "#ffffff")};
  background-color: ${(props) => (props.isSelected ? "#424749" : "#ffffff")};
  border-radius: 25px;
  height: 48px;
  width: 50px;
  align-items: center;

  div:first-child {
    font-size: 12px;
  }

  div:last-child {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const DayLabel = styled.div`
  font-size: 12px;
`;

export const DateNumber = styled.div`
  font-size: 16px;
`;
