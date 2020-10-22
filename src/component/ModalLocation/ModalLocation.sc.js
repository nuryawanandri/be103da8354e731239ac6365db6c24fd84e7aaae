import styled from "styled-components";
import RoomIcon from "@material-ui/icons/Room";
import MuiCloseIcon from "@material-ui/icons/Close";

export const ModalContainer = styled.div`
  display: block;
  position: fixed;
  z-index: 2;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  width: calc(100% - 24px);
  height: 100%;
  background-color: #ffffff;
  border-radius: 12px 12px 0 0;
  padding: 12px;
`;

export const CloseIcon = styled(MuiCloseIcon)`
  && {
    font-size: 24px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ModalTitle = styled.div`
  font-size: 26px;
  margin-top: 14px;
  color: #424749;
`;

export const RedMark = styled(RoomIcon)`
  && {
    color: #f9423a;
    font-size: 20px;
    margin-right: 12px;
    position: absolute;
    left: 8px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 24px;
  position: relative;
`;

export const InputLocation = styled.input`
  border: 1px solid #e2e4e4;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  padding-left: 40px;
  color: #6e7679;
  font-weight: 600;
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4px;
  margin-bottom: 12px;
`;

export const GrayMark = styled(RoomIcon)`
  && {
    font-size: 20px;
    margin-right: 12px;
    color: #6e7679;
    border: 1px solid #e2e4e4;
    padding: 2px;
    background-color: #e2e4e4;
    border-radius: 16px;
    position: relative;
    top: -8px;
  }
`;

export const ContainerLocation = styled.div`
  padding-bottom: 12px;
  border-bottom: 1px solid #e2e4e4;
`;

export const LocationName = styled.div`
  color: #424749;
  font-weight: 600;
  font-size: 16px;
`;

export const AddressInfo = styled.div`
  font-size: 12px;
  color: #6e7679;
`;
