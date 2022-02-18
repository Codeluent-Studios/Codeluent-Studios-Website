import React from "react";
import styled from "styled-components";

const PartnerDisplay = () => {
  return (
    <>
      <Container>
        <Collage>
          <img src="/images/game-collage.jpg" alt="" />
        </Collage>
        <TextBox>
          <h1>YOUR PARTNERS IN PRODUCTION</h1>
          <p>
            Providing engineering, QA, and management services for video game
            companies. We're engine agnostic, and can handle full SKU
            development, DLC, and porting to all major platforms.
          </p>
          <button>Learn More</button>
        </TextBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2vw 3fr 1fr;
  @media(max-width:768px){
    margin: 0 10vw;
      display: flex;
      flex-direction: column;
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
  justify-content: space-between;

  h1 {
    font-size: 2.5vw;
    @media(max-width:768px){
      font-size: 4vw;
      text-align: center;
      margin-top: 5vh;
    }
  }
  p {
    font-size: 1.7vw;

    @media(max-width:768px){
      margin-top: 1.5vh;
      font-size: 3.2vw;
    }
  }
  button {
    width: 40%;
    height: 15%;
    background-color: orange;
    border-radius: 0.7vw;
    font-size: 100%;

    @media(max-width:768px){
      width: 25vw;
      text-align: center;
      margin: 1vh auto;
    }
  }
`;

export default PartnerDisplay;
