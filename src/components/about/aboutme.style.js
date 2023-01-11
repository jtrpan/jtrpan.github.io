import styled from 'styled-components';

export const Heading = styled.h1`
  background: #5D5C61;
  background-color: #5D5C61;

  .introLine {
    position: fixed;
    left: 0%;
    top: 5.5%;
    right: 0;
    font-size: calc(50px + (64 - 28) * ((130vw - 620px) / (1700 - 320))) !important;
    text-align: center;
    font-family: Montserrat;
    color: #c0c3c4;
    background: rgba(0, 0, 0, 0);
    pointer-events: none;
  }

  .landingBlock {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    background: #5D5C61;
    color: #c0c3c4;
    background: rgba(0, 0, 0, 0);
    pointer-events: none;
  }

  .infoText {
    position: absolute;
    left: 0%;
    top: 22%;
    right: 0;
    font-size: calc(15px + (64 - 55) * ((130vw - 620px) / (1700 - 320))) !important;
    font-family: Lato;
    font-weight: lighter;
    line-height: 1.7;
    color: #c0c3c4;
    background: rgba(0, 0, 0, 0);
    pointer-events: none;
  }

  .specialText {
    text-align: left;
    font-weight: lighter;
    text-decoration: italicize;
    background: rgba(0, 0, 0, 0);
  }

  .hintText {
    font-size: calc(7px + (64 - 52) * ((100vw - 320px) / (1700 - 320))) !important;
    text-align: left;
    font-weight: lighter;
    font-style: italic;
    background: rgba(0, 0, 0, 0);
  }


  .project-link {
    text-decoration: none;
    display: inline-block;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.4s ease-in-out;
    background: rgba(0, 0, 0, 0);
    pointer-events: auto;

    :active {
      transition: transform 0s;
      background: rgba(0, 0, 0, 0);
    }
  }

  .project-link_content {
    display: block;
    color: #5998bf;
  }

  .project-link:hover > .project-link_content {
    color: #B1A296;
    transform: scale(1.03);
    transition: transform 0.4s ease-in-out;
    background: #5D5C61;
    background-color: #5D5C61;

    /* Block "sticky hover" effect on mobile devices */
    @media (hover: none) {
      color: inherit;
      background: #5D5C61;
      transition: transform 0.8s ease-in-out;
      background-color: #5D5C61;
    }
    background: #5D5C61;
    background-color: #5D5C61;
  }

  .project-link2 {
    text-decoration: none;
    display: inline-block;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.4s ease-in-out;
    background: rgba(0, 0, 0, 0);
    pointer-events: auto;

    :active {
      transition: transform 0s;
      background: rgba(0, 0, 0, 0);
    }
  }

  .project-link_content2 {
    display: block;
    color: #c0c3c4;
  }

  .project-link2:hover > .project-link_content2 {
    color: #8a0000;
    transform: scale(1.03);
    background: #5D5C61;
    background-color: #5D5C61;

    /* Block "sticky hover" effect on mobile devices */
    @media (hover: none) {
      color: inherit;
      background: #5D5C61;
      background-color: #5D5C61;
    }
    background: #5D5C61;
    background-color: #5D5C61;
  }

`;

export const Wrapper = styled.section`
  padding: 1em;
  background: #5D5C61;
  background-color: #5D5C61;
`;

export const StyledView = styled.div`
  background: #5D5C61;
  background-color: #5D5C61;
`;
