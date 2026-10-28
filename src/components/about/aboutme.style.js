import styled from 'styled-components';

export const Wrapper = styled.section`
  /* normal document flow (was absolutely positioned at top: 5.5% / 22%,
     which overlapped whenever the heading wrapped to a 2nd line) -
     relative + z-index keeps it above the fixed particle canvas */
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  max-width: 46rem;
  margin: 0 auto;
  padding: clamp(64px, 10vh, 120px) 20px 8vh;
  color: #c0c3c4;
  pointer-events: none;

  .introLine {
    /* break out of the 46rem text column so it fits on one line on desktop */
    margin: 0 calc(50% - 50vw) 0.6em;
    padding: 0 16px;
    text-wrap: balance;
    font-size: clamp(34px, 5vw, 72px);
    font-family: Montserrat;
    font-weight: normal;
    line-height: 1.2;
    text-align: center;
  }

  .infoText {
    font-size: clamp(16px, 1rem + 0.35vw, 20px);
    font-family: Lato;
    font-weight: 300;
    line-height: 1.7;
    text-align: left;
  }

  .lead {
    font-size: 1.2em;
  }

  p {
    margin: 0 0 1em;
  }

  .project-link {
    color: #5998bf;
    text-decoration: none;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;
    transition: color 0.3s ease-in-out;
  }

  .project-link:hover {
    color: #B1A296;

    /* Block "sticky hover" effect on mobile devices */
    @media (hover: none) {
      color: #5998bf;
    }
  }
`;

export const StyledView = styled.div`
  min-height: 100vh;
  background: #5D5C61;
`;
