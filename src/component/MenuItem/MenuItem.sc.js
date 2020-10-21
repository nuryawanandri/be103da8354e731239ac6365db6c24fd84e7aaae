import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";

export const ContainerItem = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #e2e4e4;
  border-radius: 10px;
  margin-bottom: 16px;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1),
    0 8px 10px 0 rgba(10, 31, 68, 0.1);
`;

export const ImgBox = styled.img`
  max-width: 100%;
  max-heigth: 100%;
  border-radius: 10px 10px 0 0;
`;

export const ContainerDetail = styled.div`
  padding: 10px;
`;

export const TitleItem = styled.div`
  color: #464749;
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 16px;
`;

export const SubTitleItem = styled.div`
  color: #6e7679;
  font-size: 14px;
  margin-bottom: 24px;
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceLabel = styled.div`
  color: #464749;
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 20px;
  position: relative;
  top: 6px;
`;

export const ButtonAdd = styled.button`
  background-color: #f9423a;
  color: #ffffff;
  width: 93px;
  height: 33px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #f9423a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddLabel = styled.div`
  position: relative;
  top: 1px;
`;

export const PlusIcon = styled(AddIcon)`
  && {
    position: relative;
    top: -1px;
  }
`;
