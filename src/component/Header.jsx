import React, { useContext } from "react";
import {
  Container,
  Box,
  Navbar,
  Lists,
  Hamberger,
  Menu,
} from "../style/headerstyle";
import logo from "../assets/images/logo.svg";
import hamberger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close-menu.svg";
import { Navbarlink } from "../style/genaral/typography";
import BackedContext from "./BackedContext";

const Header = () => {
  const { setToggleNavbar, menu } = useContext(BackedContext);

  return (
    <Container>
      <Box>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <Navbar>
          <Lists role={"list"}>
            <li>
              <Navbarlink href="">About</Navbarlink>
            </li>
            <li>
              <Navbarlink href="">Discover</Navbarlink>
            </li>
            <li>
              <Navbarlink href="">Get Started</Navbarlink>
            </li>
          </Lists>
        </Navbar>
        <Hamberger onClick={setToggleNavbar}>
          <img src={menu ? close : hamberger} alt="hamberger" />
        </Hamberger>
        {menu && (
          <Menu>
            <ul role={"list"}>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Discover</a>
              </li>
              <li>
                <a href="">Get Started</a>
              </li>
            </ul>
          </Menu>
        )}
      </Box>
    </Container>
  );
};

export default Header;
