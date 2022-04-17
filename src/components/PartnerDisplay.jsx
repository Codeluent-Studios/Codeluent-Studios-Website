import React from "react";
import styled from "styled-components";

const PartnerDisplay = () => {
  return (
    <>
      <Container>
        <Collage>
          <img src="/images/res/about2.png" alt="" />
        </Collage>
        <TextBox>
          <h1>ABOUT US</h1>
          <p>
            Codeluent Studios is a fun-loving game studio where we all members
            like to make quality games that users can enjoy and also pass their
            time comfortably with it. We also love to play games that resonate
            with us. We have a very nice community who are always looking to
            help.
          </p>
        
        </TextBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2vw 3fr 1fr;
  @media (max-width: 768px) {
    margin: 0 10vw;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
  }
`;

const Collage = styled.div`
  grid-column: 2/3;
  img {
    width: 100%;
  }
`;

const TextBox = styled.div`
  grid-column: 4/5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h1 {
    font-size: 2.5vw;

    @media (max-width: 768px) {
      font-size: 4vw;
      text-align: center;
      margin-top: 5vh;
    }
  }
  p {
    font-size: 1.7vw;

    @media (max-width: 768px) {
      margin-top: 1.5vh;
      font-size: 3.2vw;
    }
  }
  button {
    width: 15vw;
    height: 4vw;
    background-color: orange;
    border-radius: 0.7vw;
    font-size: 2vw;

    @media (max-width: 768px) {
      width: 25vw;
      text-align: center;
      margin: 1vh auto;
      font-size: 3vw;
    }
  }
`;

export default PartnerDisplay;
