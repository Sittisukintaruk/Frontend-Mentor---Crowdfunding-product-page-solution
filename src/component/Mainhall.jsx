import React, { useState, useContext } from "react";
import {
  Header,
  Ctabox,
  Ctabookmark,
  Rightbox,
  Imgebookmark,
  Logo,
  Maincontainer,
  Mainbox,
} from "../style/mainhallstyle";
import { Button } from "../style/element/Button";
import bookmark from "../assets/images/icon-bookmark.svg";
import bookmarkActive from "../assets/images/icon-bookmark-active.svg";
import logo from "../assets/images/logo-mastercraft.svg";
import { H1, H3 } from "../style/genaral/typography";
import BackedContext from "./BackedContext";
import { motion } from "framer-motion";

const Mainhall = () => {
  const [toggle, setToggle] = useState(false);
  const { setToggleMenu, setSelectBychose } = useContext(BackedContext);

  const handlerOnClick = () => {
    setToggleMenu();
    setSelectBychose(0);
  };

  return (
    <Maincontainer
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
    >
      <Logo src={logo} alt="" />
      <Mainbox>
        <Header>
          <H1>Mastercraft Bamboo Monitor Riser</H1>
          <H3>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </H3>
        </Header>
        <Ctabox>
          <Button onClick={handlerOnClick}>Back this project</Button>
          <Rightbox onClick={() => setToggle(!toggle)}>
            <Imgebookmark
              active={toggle}
              src={toggle ? bookmarkActive : bookmark}
              alt="bookmark"
            />
            <Ctabookmark active={toggle}>
              {toggle ? "bookmarked" : "bookmark"}
            </Ctabookmark>
          </Rightbox>
        </Ctabox>
      </Mainbox>
    </Maincontainer>
  );
};

export default Mainhall;
