import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <img src="/images/res/nav-logo.png" alt="logo..." />
            </Link>
            <span>CODELUENT STUDIOS</span>
          </Logo>
          <RightMenu>
            <div>
              <Link  className="nav-link" to="/">Home</Link>
              <div className="bar"></div>
            </div>
            <div>
              <Link  className="nav-link" to="/games">Games</Link>
              <div className="bar"></div>
            </div>
            <div>
              <Link  className="nav-link" to="/contact">Contact</Link>
              <div className="bar"></div>
            </div>
            <div>
              <Link className="nav-link"  to="/privacy">Privacy Policy</Link>
              <div className="bar"></div>
            </div>
          </RightMenu>
          <HamButton>
            <GiHamburgerMenu className="ham-btn" onClick={onclickHandler} />
          </HamButton>
        </NavRow>
        {show ? (
          <Menu className="show-menu">
            <div><Link to="/" className="nav-link">Home</Link></div>
            <div><Link to="/games" className="nav-link">Games</Link></div>
            <div><Link to="/contact" className="nav-link">Contact</Link></div>
            <div><Link to="/privacy" className="nav-link">Privacy Policy</Link></div>
          </Menu>
        ) : (
          <Menu>
            <div><Link to="/" className="nav-link">Home</Link></div>
            <div><Link to="/games" className="nav-link">Games</Link></div>
            <div><Link to="/contact" className="nav-link">Contact</Link></div>
            <div><Link to="/privacy" className="nav-link">Privacy Policy</Link></div>
          </Menu>
        )}
      </Nav>
    </>
  );
};
const Nav = styled.nav`
  background-color: #055c9d;
  grid-template-rows: 1fr 1fr;
  z-index: 99;
  .nav-link{
    text-decoration: none;
    color: white;
  }
`;

const NavRow = styled.div`
  grid-row: 1/2;
  height: 7vh;

  display: grid;
  grid-template-columns: 0.5fr 2fr 2fr 1fr;
  justify-content: space-between;

  @media (max-width: 862px) {
    grid-template-columns: 0.6fr 1fr 2fr 1fr;
    font-size: 1vh;
  }
`;
const Logo = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  grid-column: 2/3;

  img {
    opacity: 1;
    height: 5vh;
    cursor: pointer;
  }

  span {
    margin-left: 1rem;
    color: white;
    cursor: pointer;
    
    @media(max-width:860px){
     font-size: 0.65rem;
    }
  }
`;
const RightMenu = styled.div`
  grid-column: 3/4;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: white;

  div {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    width: fit-content;
    font-size: 2vh;
    cursor: pointer;

    @media (max-width: 862px) {
      font-size: 1rem;
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
  background-color: #68bbe3;
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
  color: white;
  background-color: #055c9d;
  position: relative;
  width: 100vw;
  grid-row: 2/3;
  display: grid;
  display: none;
  top: -21vh;
  grid-template-rows: 1fr 1fr 1fr 1fr 1rem;
  height: 29vh;
  transition: all 2s linear;
  opacity: 0;
  div {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-left: 3rem;
    margin-bottom: 1em;
    padding-top: 1rem;
  }

  &.show-menu {
    display: grid;
    top: 0;
    opacity: 1;
  }
`;

export default Navbar;
