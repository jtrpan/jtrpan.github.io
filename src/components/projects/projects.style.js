import styled from 'styled-components';


export const Heading = styled.h1`

  .links {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    font-size: 24px;

    a {
      text-decoration: none;
      margin: 1rem;
    }
  }

  .cardGroup {
    left: 0%;
    top: 18%;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    font-size: calc(8px + (64 - 52) * ((100vw - 320px) / (1700 - 320))) !important;
    font-family: Montserrat;

    @media screen and (max-width: 768px) {
      flex-flow: column;
    }
  }

  .cardRow1 {
    position: absolute;
    left: 0%;
    top: 16%;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    font-family: Montserrat;

    @media screen and (max-width: 768px) {
      flex-flow: column;
    }
  }

  .cardRow2 {
    position: absolute;
    left: 0%;
    top: calc(18% + 400px);
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
      flex-flow: column;
    }
  }

  .cardRow3 {
    position: absolute;
    left: 0%;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
      flex-flow: column;
    }
  }

  .introLine {
    position: absolute;
    left: 0%;
    top: 6%;
    right: 0%;
    font-size: calc(30px + (64 - 28) * ((100vw - 220px) / (1700 - 320))) !important;
    text-align: center;
    pointer-events: none;
    user-select: none;
    font-family: Montserrat;
    color: #c0c3c4;
  }

  .moreLine {
    position: absolute;
    left: 0%;
    right: 0%;
    font-size: calc(10px + (64 - 28) * ((100vw - 320px) / (1700 - 320))) !important;
    text-align: center;
    font-family: Montserrat;
    transform: translate(0%, +10%);
    color: #c0c3c4;
  }

  .specialText {
    font-size: calc(1px + (64 - 36) * ((100vw - 320px) / (1700 - 320))) !important;
    text-align: left;
    font-weight: lighter;
    text-decoration: italicize;
  }


  .project-link {
    text-decoration: none;
    display: inline-block;
    -webkit-tap-highlight-color: transparent;
    transition: transform 0.4s ease-in-out;

    :active {
      transition: transform 0s;
    }
  }

  .project-link_content {
    display: block;
    color: #9932CC;
  }

  .project-link:hover > .project-link_content {
    color: #6EC4E8;
    transform: scale(1.05);

    /* Block "sticky hover" effect on mobile devices */
    @media (hover: none) {
      color: inherit;
    }
  }
`;


export const Wrapper = styled.section`
  overflow: hidden;
`;