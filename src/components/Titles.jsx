import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Titles = () => {
  return (
    <>
      <Container>
        <TextBox>
          <h1>INDUS BUILDER</h1>
          <p>
            Experience the 1800 BCE period as it comes to life right in front of
            you. Feel like a king and act like one. Take decisions that will
            make your people happy and keep them content. People are the base of
            any civilization don't disappoint them or they will leave.
          </p>
          <button><Link className="btn-link" to="/games">Learn More</Link></button>
        </TextBox>
        <Collage>
          <img src="/images/res/titles2.png" alt="" />
        </Collage>
      </Container>
    </>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2vw 3fr 1fr;
  background-color: #d7dae0;
  @media (max-width: 768px) {
    margin: 0 10vw;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Collage = styled.div`
  grid-column: 4/5;
  img {
    padding: 1.5rem 0px;
    width: 100%;
  }
`;

const TextBox = styled.div`
  grid-column: 2/3;
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

    .btn-link{
      text-decoration: none;
      color: black;
    }

    @media (max-width: 768px) {
      width: 25vw;
      text-align: center;
      margin: 1vh auto;
      font-size: 3vw;
    }
  }
`;

export default Titles;
