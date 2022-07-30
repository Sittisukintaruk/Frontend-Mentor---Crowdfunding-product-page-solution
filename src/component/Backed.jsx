import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Box } from "../style/element/Container";
import { Titlebacked } from "../style/genaral/typography";
import { Groupitem, Backeditem, Progress } from "../style/backedstyle";
import BackedContext from "./BackedContext";
import { numberWithCommas } from "../common/Funtion";
import { motion } from "framer-motion";

const Backedcontainer = styled(Container)`
  padding-inline: 48px;
  padding-block: 50px;
`;

const Mainbox = styled(Box)`
  text-align: left;
  gap: 39px;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    text-align: center;
    gap: 1rem;
  }
`;

const Newtile = styled(Titlebacked)`
  color: ${({ theme }) => theme.color.neutral.Black.nomal};
`;

const MidBackeditem = styled(Backeditem)`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 2px;
    height: 70%;
    background-color: ${({ theme }) => theme.color.neutral.gray};

    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
      top: 0;
      left: 50%;
      width: 40%;
      height: 2px;
      transform: translateX(-50%);
    }
  }

  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 2px;
    height: 70%;
    background-color: ${({ theme }) => theme.color.neutral.gray};
    @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
      bottom: 0;
      left: 50%;
      width: 40%;
      height: 2px;
      transform: translateX(-50%);
    }
  }
`;

const Backed = () => {
  const { backed, total } = useContext(BackedContext);

  return (
    <Backedcontainer
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.4, delay: 0.2 }}
    >
      <Mainbox>
        <Groupitem>
          <Backeditem>
            <Newtile>${numberWithCommas(backed)}</Newtile>
            of $100,000 backed
          </Backeditem>
          <MidBackeditem>
            <Newtile>{numberWithCommas(total)}</Newtile>
            total backers
          </MidBackeditem>
          <Backeditem>
            <Newtile>56</Newtile>
            days left
          </Backeditem>
        </Groupitem>
        <Progress backed={backed} />
      </Mainbox>
    </Backedcontainer>
  );
};

export default Backed;
