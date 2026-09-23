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
    flex-flow: row wrap;
    column-gap: 3em;
    row-gap: 0.3em;
    padding: 0 22%;
  }

  .questionLine,
  .chatLine {
    font-size: calc(10px + (64 - 28) * ((100vw - 320px) / (1700 - 320))) !important;
    text-align: left;
    font-family: Lato;
    color: #c0c3c4;
    pointer-events: none;
  }

  .talkRow {
    padding: 0 22%;
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
    padding: 0 22%;
  }

  .contactLine {
    font-size: calc(10px + (64 - 44) * ((100vw - 320px) / (1700 - 320))) !important;
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
    /* replaces the old zoom: 1.5 hack: zoom has spotty cross-browser
       support and, worse, this app has a separate global body zoom:
       95% style (leaked in from projects.css) that breaks position:
       fixed under it - zoom in general is landmine-prone here.
       FontAwesome icons size themselves in em by default, so scaling
       font-size scales them the standard, portable way. */
    font-size: clamp(28px, 6vw, 46px);
  }

  .contactButton1:hover {
    transform: scale(1.3);
    transition: transform 0.4s ease-in-out;
    color: #2867B2;
  }
  .contactButton2:hover {
    transform: scale(1.3);
    transition: transform 0.4s ease-in-out;
    color: #24292e;
  }
  .contactButton3:hover {
    transform: scale(1.3);
    transition: transform 0.4s ease-in-out;
    color: #3b5998;
  }
  .contactButton4:hover {
    transform: scale(1.3);
    transition: transform 0.4s ease-in-out;
    color: #1DA1F2;
  }
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
