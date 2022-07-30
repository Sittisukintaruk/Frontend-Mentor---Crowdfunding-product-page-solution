import styled from "styled-components";
import { Button } from "../style/element/button";
import { H2, Paragraph } from "./genaral/typography";

const Container = styled.div`
  width: 540px;
  height: 450px;
  background-color: ${({ theme }) => theme.color.neutral.white};
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  border-radius: 9px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  padding-block: 48px;
  padding-inline: 48px;
`;

const Box = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const ButtonPopup = styled(Button)`
  font-size: ${({ theme }) => theme.fontsize.sm};
  font-weight: ${({ theme }) => theme.fontweight.bold};
`;

const Title = styled(H2)`
  font-size: ${({ theme }) => theme.fontsize.lg2};
`;

const TextBody = styled(Paragraph)`
  letter-spacing: 0.005em;
  margin-top: 22px;
`;

export { Container, ButtonPopup, Box, Title, TextBody };
