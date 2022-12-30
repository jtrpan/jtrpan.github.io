import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: calc(28px + (64 - 28) * ((100vw - 220px) / (1700 - 320))) !important;
  text-align: left;
  font-family: Poppins;
  white-space: nowrap;
  overflow: hidden;

  .city-link {
    text-decoration: none;
    display: inline-block;
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.4s ease-in-out;
    pointer-events: auto;

    :active {
      transform: scale(1.2);
      transition: transform 0s;
    }
  }

  .city-link_content {
    display: block;
    color: #557A95;
  }

  .city-link:hover > .city-link_content {
    color: #bfae50;

    /* Block "sticky hover" effect on mobile devices */
    @media (hover: none) {
      color: inherit;
    }
  }

  /* Remove default focus from target elements */  
  .city-link:focus,
  .city-link_content:focus {
    outline: none;
  }

  .scrollTitle {
      color: #7395AE;
      pointer-events: none;
  }

  .helloTitle {
    font-family: Comfortaa;
    color: #B1A296;
    pointer-events: none;
  }

  .landingBlock {
    position: fixed;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -80%);
    color: #c0c3c4;
    pointer-events: none;
  }
  .extraLine {
    position: fixed;
    top: calc(80% + 60px);
    left: 50%;
    transform: translate(-50%, -80%);
    color: #c0c3c4;
    pointer-events: none;
    font-size: calc(10px + (64 - 52) * ((100vw - 320px) / (1700 - 320))) !important;
    text-align: center;
    font-weight: lighter;
    font-style: italic;
  }
`;

export const Wrapper = styled.section`
  padding: 1em;
  background: #5D5C61;
`;