import styled, { css } from "styled-components";
import { Wrapper, Box, Container } from "./element/Container";
import { H2, H3, H4 } from "./genaral/typography";

const Block = styled(Wrapper)`
  display: block;
  gap: unset;
  flex-direction: unset;
  position: fixed;
  margin: 0;
  height: 95%;
  top: 50%;
  padding-top: 24px;
  padding-bottom: 24px;
  transform: scale(1) translateY(-50%);
  background-color: ${({ theme }) => theme.color.neutral.white};
  border-radius: 9px;
  z-index: 20;
  overflow-y: scroll;
`;

const Header = styled(Box)`
  padding-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding-top: 0;
    padding-inline: 1rem;
  }
`;

const Body = styled(Box)`
  margin-top: 30px;
  padding-inline: 8px;
  padding-block: 8px;
  gap: 23px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

const Title = styled(H2)`
  font-size: 24px;
`;

const Paragraphs = styled.p`
  line-height: 150%;
  font-weight: ${({ theme }) => theme.fontweight.medium};
  color: ${(props) => props.theme.color.neutral.Black.lighter};

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: ${({ theme }) => theme.fontsize.xs};
  }
`;

const Card = styled(Container)`
  position: relative;
  border: 2px solid
    ${(props) =>
      props.check
        ? props.theme.color.primary.Moderatecyan
        : props.theme.color.neutral.gray};
  /* ${({ theme }) => theme.color.neutral.gray} */

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
      user-select: none;
    `}
`;

const RadioButton = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.neutral.gray};
  flex-shrink: 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    opacity: 0;
    background-color: ${({ theme }) => theme.color.primary.Moderatecyan};
  }
`;

const Radio = styled.label`
  cursor: pointer;
  display: flex;
  width: 100%;
  padding-left: 25px;
  padding-block: 40px;
  padding-right: 16px;

  & > input[type="radio"] {
    position: absolute;
    opacity: 0;
  }

  & > input[type="radio"]:checked + div div > .radio:before {
    opacity: 1;
  }

  & > input[type="radio"]:checked ~ & {
    border: 1px solid ${({ theme }) => theme.color.primary.Moderatecyan};
  }
`;

const AreaWarpper = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

const Mainpledge = styled.div`
  display: flex;
  flex-direction: row;
  gap: 17px;
`;

const NewMainpledge = styled(Mainpledge)`
  flex-direction: column;
`;

const Pledge = styled(H4)`
  font-size: ${({ theme }) => theme.fontsize.base};
  color: ${({ theme }) => theme.color.primary.Moderatecyan};
  line-height: 28px;
`;

const Cardheader = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 24px;
  gap: 0.75rem;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;
    margin-left: 0px;
    gap: 0;
  }
`;

const MobileLeft = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
  }
`;

const DesktopLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

const Cardtoper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    justify-content: flex-start;
    gap: 17px;
  }
`;

const H3gray = styled(H4)`
  color: ${({ theme }) => theme.color.neutral.Darkgray};
`;

const Form = styled.form`
  border-top: 1px solid ${({ theme }) => theme.color.neutral.gray};
  display: grid;
`;

const Inputarea = styled.div`
  padding-inline: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    padding-block: 1rem;
    flex-direction: column;
  }
`;

const CardTile = styled(H3)`
  font-weight: ${({ theme }) => theme.fontweight.bold};

  &:hover {
    color: ${({ theme }) => theme.color.primary.Moderatecyan};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const InputPledge = styled.div`
  width: 100px;
  border-radius: 32px;
  border: 1px solid ${({ theme }) => theme.color.primary.Moderatecyan};
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  & > input[type="text"] {
    width: calc(100% - 4rem);
    border: none;
    padding-left: 2px;
    outline: none;
  }

  & > input[type="text"].input-error {
    outline: 1px solid red;
  }
`;

const Left = styled(H3)`
  font-weight: ${({ theme }) => theme.fontweight.bold};
  display: inline;
`;

const RightLeft = styled.span`
  color: ${({ theme }) => theme.color.neutral.Darkgray};
  margin-left: 4px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeadTitle = styled(CardContainer)`
  align-items: center;
`;

const ImgaeClose = styled.div`
  cursor: pointer;
`;

export {
  InputPledge,
  ButtonGroup,
  CardTile,
  Inputarea,
  Form,
  H3gray,
  Cardtoper,
  Cardheader,
  Pledge,
  Mainpledge,
  AreaWarpper,
  Radio,
  RadioButton,
  Card,
  Paragraphs,
  Title,
  Head,
  Body,
  Header,
  Block,
  NewMainpledge,
  Left,
  RightLeft,
  MobileLeft,
  DesktopLeft,
  CardContainer,
  HeadTitle,
  ImgaeClose,
};
