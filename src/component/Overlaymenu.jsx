import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  Paragraphs,
  Title,
  Head,
  Header,
  Block,
  HeadTitle,
  ImgaeClose,
} from "../style/OverlayStyle";
import OverlayBody from "./OverlayBody";
import close from "../assets/images/icon-close-modal.svg";
import BackedContext from "./BackedContext";

const Overlaymenu = () => {
  const { setToggleMenu } = useContext(BackedContext);

  return (
    <Block
      as={motion.div}
      initial={{ opacity: 0, transform: "scale(0) translateY(-50%)" }}
      animate={{ opacity: 1, transform: "scale(1) translateY(-50%)" }}
      transition={{ type: "spring", duration: 0.4 }}
      exit={{ opacity: 0, transform: "scale(0) translateY(-50%)" }}
    >
      <Header
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.4, delay: 0.2 }}
      >
        <Head>
          <HeadTitle>
            <Title>Back this project</Title>
            <ImgaeClose onClick={setToggleMenu}>
              <img src={close} alt="" />
            </ImgaeClose>
          </HeadTitle>
          <Paragraphs>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </Paragraphs>
        </Head>
      </Header>
      <OverlayBody />
    </Block>
  );
};

export default Overlaymenu;
