import React from "react";
import styled from "styled-components";

const VideoDisplay = () => {
  return (
    <>
      <Container>
        <video autoPlay loop muted>
          <source src="/videos/home-video.mp4" type="video/mp4" />
        </video>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;
  video {
    opacity: 0.5;
    height: 80vh;
    max-width: 100%;
    :hover {
      opacity: 0.8;
    }
    @media(max-width:862px){
        /* width: 100%; */
        height: 100%;
    }
  }
`;

export default VideoDisplay;
