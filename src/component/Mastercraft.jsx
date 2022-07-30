import React, { useContext } from "react";
import { Wrapper } from "../style/element/Container";
import About from "./About";
import Backed from "./Backed";
import BackedContext from "./BackedContext";
import Mainhall from "./Mainhall";
import Overlay from "./Overlay";
import Overlaymenu from "./Overlaymenu";
import { AnimatePresence } from "framer-motion";
import Popup from "./Popup";

const Mastercraft = () => {
  const { overlay, popup, menu } = useContext(BackedContext);
  return (
    <Wrapper>
      {overlay && <Overlay />}
      {menu && <Overlay />}
      <Mainhall />
      <Backed />
      <About />
      <AnimatePresence>{popup && <Popup />}</AnimatePresence>
      <AnimatePresence>{overlay && <Overlaymenu />}</AnimatePresence>
    </Wrapper>
  );
};

export default Mastercraft;
