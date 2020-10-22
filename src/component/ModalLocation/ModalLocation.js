import React from "react";

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

const ModalLocation = () => {
  return (
    <ModalContainer>
      <ModalContent>
        <ModalHeader>
          <CloseIcon>Close Icon</CloseIcon>
        </ModalHeader>
        <ModalTitle>Cek makanan yang tersedia di lokasi kamu!</ModalTitle>
        <ContainerInput>
          <RedMark />
          <InputLocation type="text" />
        </ContainerInput>
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
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalLocation;
