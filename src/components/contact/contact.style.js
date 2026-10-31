import styled from 'styled-components';

export const Heading = styled.h1`
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 6% 0;
  box-sizing: border-box;

  .headerRow {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 2vw;
    row-gap: 0.3em;
    padding-left: 22%;
  }

  .questionLine,
  .chatLine {
    font-size: calc(10px + (64 - 28) * ((100vw - 320px) / (1700 - 320))) !important;
    text-align: left;
    font-family: Lato;
    color: #c0c3c4;
    pointer-events: none;
  }

  /* mobile only - desktop/tablet keep the row above unchanged */
  @media (max-width: 768px) {
    .headerRow {
      flex-direction: column;
      row-gap: 0.25em;
    }

    .questionLine,
    .chatLine {
      /* sized off viewport HEIGHT (clamped) rather than width, so it
         scales with however much vertical room is actually available
         instead of risking pushing the rows below it off screen */
      font-size: clamp(18px, 3.4vh, 30px) !important;
    }
  }

  .talkRow {
    padding-left: 22%;
  }

  .contact-link {
    display: inline-block;
    text-align: left;
    text-decoration: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    font-size: min(calc(100px + (64 - 22) * ((110vw - 1620px) / (1600 - 320))), 12vw, 16vh) !important;
    font-family: Fjalla One;

    :active {
      transform: scale(1.2);
    }
  }

  .contact-link_content {
    display: block;
    color: #7395ae;
  }

  .contact-link:hover > .contact-link_content {
    color: #557a95;
    transition: transform 0.4s ease-in-out;
    transform: scale(1.1);

    /* Block "sticky hover" effect on mobile devices */
    @media (hover: none) {
      color: inherit;
    }
  }

  /* Remove default focus from target elements */
  .contact-link:focus,
  .contact-link_content:focus {
    outline: none;
  }

  /* Only when the outer element is reached by a keyboard, apply the focus styles. Now clicking on the element won't focus the link */
  .contact-link:focus > .contact-link_content {
    color: #557a95;

    /* Apply default focus styles */
    outline: 3px solid turquoise;
  }

  .socialRow {
    padding-left: 22%;
  }

  .contactLine {
    font-size: calc((10px + (64 - 44) * ((100vw - 320px) / (1700 - 320))) * 1.5) !important;
    text-align: left;
    font-family: Montserrat;
    color: #c0c3c4;
    pointer-events: none;
    margin-bottom: 0.5em;
  }

  .buttonGroup {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    column-gap: clamp(12px, 3vw, 40px);
    row-gap: 0.4em;
    /* FontAwesome icons size themselves in em, so this sizes them */
    font-size: clamp(28px, 6vw, 46px);
  }

  .buttonGroup a {
    display: inline-flex;
    color: #c0c3c4;
    transition: transform 0.4s ease-in-out, color 0.4s ease-in-out;
  }

  .buttonGroup a:hover,
  .buttonGroup a:focus-visible {
    transform: scale(1.3);
  }

  .buttonGroup a:hover .linkedin { color: #2867B2; }
  .buttonGroup a:hover .github { color: #24292e; }
  .buttonGroup a:hover .facebook { color: #3b5998; }
  .buttonGroup a:hover .x { color: #000; }
`;

export const Wrapper = styled.section`
  /* dvh (not vh) so mobile browsers size this to the space actually
     visible on screen, not the space behind a collapsible address bar -
     otherwise the bottom row can end up below the visible fold even
     though nothing is technically "scrolled" */
  height: 100vh;
  height: 100dvh;
  box-sizing: border-box;
  padding: 1em;
  background: #5D5C61;
`;
