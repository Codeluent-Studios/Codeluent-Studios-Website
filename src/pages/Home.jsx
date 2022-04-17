import React from "react";
import styled from "styled-components";
import PartnerDisplay from "../components/PartnerDisplay";
import Titles from "../components/Titles";
import VideoDisplay from "../components/VideoDisplay";

const Home = () => {
  return (
    <>
      <Container>
        <div className="vid">
          <VideoDisplay />
        </div>
        <div className="partnerdis">
            <PartnerDisplay />
        </div>
        <div className="titles">
          <Titles />
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .vid {
  }
  .partnerdis {
    margin-top: 15vh;
  }
  .titles {
    margin-top: 15vh;
  }
`;
export default Home;
