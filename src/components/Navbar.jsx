import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const onclickHandler = () => {
    setShow((show) => !show);
    console.log(show);
  };
  return (
    <>
      <Nav>
        <NavRow>
          <Logo>
            <img src="/images/logo.png" alt="logo..." />
          </Logo>
          <RightMenu>
            <div>
              Home
              <div className="bar"></div>
            </div>
            <div>
              Games
              <div className="bar"></div>
            </div>
            <div>
              Write us
              <div className="bar"></div>
            </div>
            <div>
              About us
              <div className="bar"></div>
            </div>
          </RightMenu>
          <HamButton>
            <GiHamburgerMenu className="ham-btn" onClick={onclickHandler} />
          </HamButton>
        </NavRow>
        {show ? (
          <Menu className="show-menu">
            <div>Home</div>
            <div>Games</div>
            <div>Write Us</div>
            <div>About Us</div>
          </Menu>
        ) : (
          <Menu>
            <div>Home</div>
            <div>Games</div>
            <div>Write Us</div>
            <div>About Us</div>
          </Menu>
        )}
      </Nav>
    </>
  );
};
const Nav = styled.nav`
  background-color: #06011dcc;
  grid-template-rows: 1fr 1fr;
  z-index: 99;
`;

const NavRow = styled.div`
  grid-row: 1/2;
  height: 7vh;

  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  justify-content: space-between;

  @media (max-width: 862px) {
    grid-template-columns: 1fr 1fr 2fr 1fr;
    font-size: 1.5vh;
  }
`;
const Logo = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  grid-column: 2/3;

  img {
    opacity: 0.7;
    height: 5vh;
    cursor: pointer;
  }
  img:hover {
    opacity: 1;
  }
`;
const RightMenu = styled.div`
  grid-column: 3/4;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);

  div {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    width: fit-content;
    font-size: 2vh;
    cursor: pointer;

    @media (max-width: 862px) {
      font-size: 1.5vh;
    }
  }
  .bar {
    height: 2px;
    background-color: #c1cfe4;
    width: 0%;
    transition: all 0.35s cubic-bezier(0.14, 0.6, 0.6, 0.99);
  }
  div:hover .bar {
    width: 100%;
  }
  div:hover {
    color: #c1cfe4;
  }
  @media (max-width: 600px) {
    display: none;
    height: 0;
  }
`;
const HamButton = styled.div`
  background-color: #06011dcc;
  display: none;
  @media (max-width: 600px) {
    display: flex;
    grid-column: 4/5;
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: center;
    .ham-btn {
      transform: scale(2);
    }
  }
`;

const Menu = styled.div`
  background-color: #080125a0;
  position: relative;
  width: 100vw;
  grid-row: 2/3;
  display: grid;
  display: none;
  top: -21vh;
  grid-template-rows: 1fr 1fr 1fr 1fr 1rem;
  height: 21vh;
  transition: all 2s linear;
  opacity: 0;
  div {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-left: 3rem;
    margin-bottom: 1em;
  } 

  &.show-menu {
    display: grid;
    top: 0;
    opacity: 1;
    
  }
`;

export default Navbar;
