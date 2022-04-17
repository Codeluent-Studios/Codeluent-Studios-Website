import React from "react";
import styled from "styled-components";
import { CgCopyright } from "react-icons/cg";
import { FaDiscord, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiBuymeacoffee} from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Foot>
        <Logo>
          <img src="/images/res/nav-logo.png" alt="logo..." />
        </Logo>

        <Text>
          <div>
            <div className="copyright">
              <CgCopyright />
              Codeluent Studios
            </div>
            <div className="copyright">
              Want to talk to Us?{" "}
              <span>
                <Link className="contact-link" to="/contact">
                  Contact Us
                </Link>
              </span>
            </div>
          </div>
        </Text>

        <Social>
          <div className="social-icon">
            <a href="https://discord.gg/WfBZk8q">
              <FaDiscord color="white" size={30} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://youtube.com/channel/UCKXOWUlwmkBBJrBGr1zUyRg">
              <FaYoutube color="white" size={30} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://twitter.com/Agr_Kushal?t=pwtiKNmsbabQChj1S5Y1MQ&s=09">
              <FaTwitter color="white" size={30} />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.buymeacoffee.com/codeluent">
              <SiBuymeacoffee color="white" size={30} />
            </a>
          </div>
        </Social>
      </Foot>
    </>
  );
};

const Foot = styled.footer`
  height: 12vh;
  background-color: #055c9d;
  display: grid;
  align-items: center;
  grid-template-columns: 0.5fr 1fr 2fr 1fr 0.5fr;
`;
const Logo = styled.div`
  grid-column: 2/3;
  img {
    height: 8vh;
  }
`;
const Text = styled.div`
  color: white;
  grid-column: 3/4;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;

  .contact-link {
    text-decoration: none;
    color: #f7f9ff;
    font-weight: 1000;
  }
`;
const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  .social-icon{
      /* background-color: white; */
  }
`;

export default Footer;
