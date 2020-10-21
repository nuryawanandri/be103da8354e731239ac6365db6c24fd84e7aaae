import React, { useRef, useState } from "react";
import { connect } from "react-redux";

import { setIsOpenBtn } from "../../reducer/lunchDinnerBtn";

import { Container } from "./ConatinerMenu.sc";

const ContainerMenu = (props) => {
  const containerRef = useRef(null);
  const [lastScroll, setLastScroll] = useState(0);

  const onScroll = (e) => {
    if (lastScroll < containerRef.current.scrollTop) {
      console.log("goDown");
      props.setIsOpenBtn(false);
    } else {
      console.log("goUp");
      props.setIsOpenBtn(true);
    }
    setLastScroll(containerRef.current.scrollTop);
  };

  return (
    <Container ref={containerRef} onScroll={onScroll}>
      {props.children}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isOpenBtn: state.lunchDinnerBtn.isOpenBtn,
});

const mapDispatchToProps = (dispatch) => ({
  setIsOpenBtn(data) {
    dispatch(setIsOpenBtn(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerMenu);
