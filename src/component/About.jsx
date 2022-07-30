import React, { useContext } from "react";
import { Container, Box } from "../style/element/Container";
import styled from "styled-components";
import { H2, Paragraph } from "../style/genaral/typography";
import Aboutcard from "./Aboutcard";
import BackedContext from "./BackedContext";
import { motion } from "framer-motion";

const Maincontainer = styled(Container)`
  padding-inline: 48px;
  padding-top: 18px;
  padding-bottom: 35px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding-inline: 20px;
  }
`;

const Paragraphgray = styled(Paragraph)`
  color: ${({ theme }) => theme.color.neutral.Black.light};
  margin-top: 38px;
`;

const Aboutbox = styled(Box)`
  padding-top: 31px;
`;

const Cards = styled(Box)`
  padding-top: 8px;
  gap: 24px;
`;

const About = () => {
  const { contents } = useContext(BackedContext);

  return (
    <Maincontainer
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.4, delay: 0.4 }}
    >
      <Aboutbox>
        <H2>About this project</H2>
        <Paragraphgray>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
          <br />
          <br />
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </Paragraphgray>
      </Aboutbox>
      <Cards>
        {contents?.map(({ pledge, title, detaile, left, id }, index) => (
          <Aboutcard
            key={index}
            title={title}
            pledge={pledge}
            detaile={detaile}
            left={left}
            lastitem={left === 0 ? true : false}
            id={id}
          />
        ))}
      </Cards>
    </Maincontainer>
  );
};

export default About;
