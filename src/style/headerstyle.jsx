import styled from "styled-components";
import hero from "../assets/images/image-hero-desktop.jpg";

const Container = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1112px;
  margin-inline: auto;
  margin-top: 2rem;
  position: relative;

  > * {
    z-index: 99;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding-inline: 2rem;
  }
`;

const Navbar = styled.nav``;

const Lists = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

const Hamberger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
  }
`;

const Menu = styled.div`
  position: absolute;
  display: none;

  left: 50%;
  top: 40px;
  transform: translateX(-50%);
  width: calc(100% - 4rem);
  background-color: white;
  border-radius: 12px;
  z-index: 99;

  ul > li {
    padding-block: 2rem;
    padding-left: 22px;
  }

  ul > li:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.color.neutral.gray};
  }

  ul > li a {
    font-size: ${({ theme }) => theme.fontsize.md};
    font-weight: ${({ theme }) => theme.fontweight.bold};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: block;
  }
`;

export { Container, Box, Navbar, Lists, Hamberger, Menu };
