import styled from "styled-components";
import { Container, Box } from "../style/element/Container";

const Maincontainer = styled(Container)`
  padding-inline: 43px;
  padding-top: 60px;
  padding-bottom: 47px;
  position: relative;
`;

const Mainbox = styled(Box)`
  text-align: center;
  gap: 41px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const Ctabox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    gap: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    justify-content: center;
  }
`;

const Ctabookmark = styled.button`
  background-color: #f4f4f4;
  font-size: ${({ theme }) => theme.fontsize.base};
  font-weight: ${({ theme }) => theme.fontweight.medium};
  color: ${(props) =>
    props.active
      ? props.theme.color.primary.Darkcyan
      : props.theme.color.neutral.Black.lighter};

  padding-block: 19px;
  padding-right: 21px;
  padding-left: 36px;
  border-radius: 0px 28px 28px 0px;
  border: none;
  outline: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

const Rightbox = styled.div`
  position: relative;
  :hover {
    opacity: 0.7;
  }
`;

const Imgebookmark = styled.img`
  position: absolute;
  left: -37px;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
  z-index: 20;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
    position: static;
    left: 0;
    width: 64px;
    height: 64px;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

export {
  Header,
  Ctabox,
  Ctabookmark,
  Rightbox,
  Imgebookmark,
  Logo,
  Maincontainer,
  Mainbox,
};
