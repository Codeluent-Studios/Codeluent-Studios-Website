import React from "react";
import styled from "styled-components";

const Titles = () => {
  return (
    <>
      <Container>
        <TextBox>
          <h1>ORIGINAL TITLES</h1>
          <p>
            Skymap creates original IP, as well as partners with developers to
            realize the full potential of projects. We have full self-publishing
            capability, development resources, and a deep network of
            professionals ready to make something great.
          </p>
          <button>Learn More</button>
        </TextBox>
        <Collage>
          <img src="/images/titles.png" alt="" />
        </Collage>
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
    flex-direction: column-reverse;
  }
`;

const Collage = styled.div`
  grid-column: 4/5;
  img {
    width: 100%;
  }
`;

const TextBox = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

export default Titles;
