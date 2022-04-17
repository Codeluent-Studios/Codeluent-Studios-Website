import React from "react";
import styled from "styled-components";

const Games = () => {
  return (
    <>
      <Container>
        <h1>Our Games</h1>
        <div className="band"></div>
        <Game>
          <h2>Indus Builder</h2>
          <div className="game-img">
            <img src="/images/res/game-indus.jpg" alt="image" />
          </div>
          <div className="game-text">
            <p>
              Namaste Master, The king has chosen you as the next heir and given
              you a crucial task to set up the hub of your civilization
              somewhere far away from the war.{" "}
            </p>
            <p>
              But enemies and bandits are always there lurking somewhere in the
              shadows and followed you to the new base but not before you were
              able to make a new shiny barracks. Now you need to train the
              soldiers and defend your people, beware they can attack anytime.{" "}
            </p>
            <p>
              Meanwhile, you will be in charge of building a shiny new
              civilization from the ground up. The land is deserty with a few
              patches of grass but no worries right beside you is the mighty
              Indus river, giving your civilization the hope that you can
              achieve anything.
            </p>
            <p>
              Will you be able to make a sprawling civilization that will be
              written in the golden pages of history? Only time will tell but
              Master, Me, and the king have complete faith in your dedication
              that you will make the people of the civilization pride their
              civilization. You will never break their trust.
            </p>
            <p>
              Experience the 1800 BCE period as it comes to life right in front
              of you. Feel like a king and act like one. Take decisions that
              will make your people happy and keep them content. People are the
              base of any civilization don't disappoint them or they will leave.
            </p>
            <p>You will surely manage. Won't you?</p>
          </div><div className="play-btn">
              <a href="https://play.google.com/store/apps/details?id=com.Codeluent.IndusBuilder">
              <img src="/images/res/play-btn.png" alt="google play link indus" />
              </a>
          </div>
        </Game>
        <Game>
          <h2>Idle Office Time</h2>
          <div className="game-img">
            <img src="/images/res/game-office.jpg" alt="IdleImage" />
          </div>
          <div className="game-text">
            <p>Business is war and it's never personal </p>
            <p>
              Pack up your gear and get ready for a war to become the most
              successful company the world has ever seen.{" "}
            </p>
            <p>
              Idle Office time is a name that sounds sweet. But you will be
              given the task of managing a company and take all the important
              decisions for the company. Are you ready to take up such a big
              responsibility upon yourselves? You will be in charge of hiring
              people, taking up projects, and carrying out actions to keep your
              employee happy and productive all the time.
            </p>
            <p>
              If you fail to do so your company will declare bankruptcy but
              don't fear you will be given one more chance to reverse the things
              that you have done wrong.
            </p>
          </div>
          <div className="play-btn">
              <a href="https://play.google.com/store/apps/details?id=com.CodeluentStudios.IdleOfficeTime">
              <img src="/images/res/play-btn.png" alt="google play link idle office" />
              </a>
          </div>
        </Game>
      </Container>
    </>
  );
};

export default Games;

const Container = styled.div`
  margin: 0 auto;
  width: 75vw;
  h1 {
    margin: 2rem auto 1rem auto;
    display: flex;
    justify-content: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  
  .band{
      height: 0.65vh;
      background-color: #000000;
  }
`;

const Game = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  h2 {
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  .game-img {
    display: flex;
    justify-content: center;
    margin-bottom: 1.2rem;
  }
  img {
    width: 100%;
  }

  .game-text {
    p {
      margin-bottom: 1.2rem;
    }
  }

  .play-btn img{
      display: flex;
      margin: auto;
      width: 20%;
      @media (max-width: 768px) {
        width:40%;
      }
  }
`;
