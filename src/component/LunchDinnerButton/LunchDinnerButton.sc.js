import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  button:first-child {
    border-radius: 4px 0 0 4px;
  }

  button:last-child {
    border-radius: 0 4px 4px 0;
    border-left: none;
  }
`;

export const Button = styled.button`
  width: 50%;
  height: 32px;
  color: ${(props) => (props.isActive ? "#f1f1f2" : "#e2e4e4")};
  border: 1px solid ${(props) => (props.isActive ? "#f1f1f2" : "#e2e4e4")};
  background-color: ${(props) => (props.isActive ? "#424749" : "#ffffff")};
  font-size: 16px;
`;
