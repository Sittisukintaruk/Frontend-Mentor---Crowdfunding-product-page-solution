import React, { useContext } from "react";
import {
  Container,
  ButtonPopup,
  Box,
  Title,
  TextBody,
} from "../style/popupStyle";

import BackedContext from "./BackedContext";
import { motion } from "framer-motion";

import check from "../assets/images/icon-check.svg";

const Popup = () => {
  const { setTogglePopup, setToggleMenu, popup, overlay } =
    useContext(BackedContext);

  const closePopup = () => {
    if (popup && overlay) {
      setTogglePopup();
      setToggleMenu();
    }
  };

  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0, transform: "scaleY(0.4) translate(-50%,-50%)" }}
      animate={{ opacity: 1, transform: "scaleY(1) translate(-50%,-50%)" }}
      transition={{ type: "spring", duration: 0.4 }}
      exit={{
        opacity: 0,
        transform: "scaleY(0.7) translate(-50%,-50%)",
      }}
    >
      <Box>
        <img src={check} alt="" />
        <div>
          <Title>Thanks for your support!</Title>
          <TextBody>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </TextBody>
        </div>
        <ButtonPopup small onClick={closePopup}>
          Got it!
        </ButtonPopup>
      </Box>
    </Container>
  );
};

export default Popup;
