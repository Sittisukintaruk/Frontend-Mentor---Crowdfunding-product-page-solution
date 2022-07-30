import React, { useContext } from "react";
import styled from "styled-components";
import BackedContext from "./BackedContext";
import { RemoveScrollBar } from "react-remove-scroll-bar";
const Overlaybg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: ${(props) => (props.upper ? 50 : 10)};
  background-color: rgba(0, 0, 0, 0.5);
`;

const Overlay = () => {
  const { setToggleMenu, popup, setTogglePopup, menu, setToggleNavbar } =
    useContext(BackedContext);

  const handlerClcik = () => {
    if (menu) {
      setToggleNavbar();
    } else {
      popup && setTogglePopup();
      setToggleMenu();
    }
  };

  return (
    <Overlaybg onClick={handlerClcik} upper={popup}>
      <RemoveScrollBar />
    </Overlaybg>
  );
};

export default Overlay;
