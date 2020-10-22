import React, { useState } from "react";
import { connect } from "react-redux";

import { setIsModalLocOpen } from "../../reducer/modalLocation";

import {
  ModalContainer,
  ModalContent,
  CloseIcon,
  ModalHeader,
  ModalTitle,
  RedMark,
  ContainerInput,
  InputLocation,
  ResultItem,
  GrayMark,
  LocationName,
  AddressInfo,
  ContainerLocation,
} from "./ModalLocation.sc";

const ModalLocation = (props) => {
  const [inputKeySearch, setInputKeySearch] = useState("");

  return (
    <ModalContainer isModalLocOpen={props.isModalLocOpen}>
      <ModalContent>
        <ModalHeader>
          <CloseIcon onClick={props.setIsModalLocOpen(false)}>
            Close Icon
          </CloseIcon>
        </ModalHeader>
        <ModalTitle>Cek makanan yang tersedia di lokasi kamu!</ModalTitle>
        <ContainerInput>
          <RedMark />
          <InputLocation
            type="text"
            value={inputKeySearch}
            onChange={(e) => {
              setInputKeySearch(e.target.value);
            }}
          />
        </ContainerInput>
        {inputKeySearch.length >= 3 && (
          <div>
            <ResultItem>
              <GrayMark />
              <ContainerLocation>
                <LocationName>Kulina</LocationName>
                <AddressInfo>
                  Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...
                </AddressInfo>
              </ContainerLocation>
            </ResultItem>
            <ResultItem>
              <GrayMark />
              <ContainerLocation>
                <LocationName>Kulina</LocationName>
                <AddressInfo>
                  Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...
                </AddressInfo>
              </ContainerLocation>
            </ResultItem>
            <ResultItem>
              <GrayMark />
              <ContainerLocation>
                <LocationName>Kulina</LocationName>
                <AddressInfo>
                  Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...
                </AddressInfo>
              </ContainerLocation>
            </ResultItem>
            <ResultItem>
              <GrayMark />
              <ContainerLocation>
                <LocationName>Kulina</LocationName>
                <AddressInfo>
                  Jalan Tulodong Atas 28, Senayan, Kebayoran Bar...
                </AddressInfo>
              </ContainerLocation>
            </ResultItem>
          </div>
        )}
      </ModalContent>
    </ModalContainer>
  );
};

const mapStateToProps = (state) => ({
  isModalLocOpen: state.modalLocation.isModalLocOpen,
});

const mapDispatchToProps = (dispatch) => ({
  setIsModalLocOpen(data) {
    return () => {
      dispatch(setIsModalLocOpen(data));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalLocation);
