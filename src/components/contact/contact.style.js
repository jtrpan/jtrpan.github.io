import styled from 'styled-components';

export const Heading = styled.h1`

.questionLine {
  position: absolute;
  left: 22%;
  top: 6%;
  right: 0;
  font-size: calc(10px + (64 - 28) * ((100vw - 320px) / (1700 - 320))) !important;
  text-align: left;
  font-family: Lato;
  color: #c0c3c4;
  pointer-events: none;
}

.chatLine {
  position: absolute;
  left: 55%;
  top: 6%;
  right: 0;
  font-size: calc(10px + (64 - 28) * ((100vw - 320px) / (1700 - 320))) !important;
  text-align: left;
  font-family: Lato;
  color: #c0c3c4;
  pointer-events: none;
}

.contactLine {
  /* position: fixed would be the obvious choice to pin this to the
     viewport, but this app has a global body zoom: 95% style (leaks in
     from projects.css - it's eagerly imported into the shared bundle,
     so it applies on every route) and Chrome's position:fixed breaks
     under a zoomed ancestor - it renders this off-screen entirely.
     absolute has no such issue and, since nothing here ever needs the
     page to scroll, positions identically against the viewport. */
  position: absolute;
  left: 22%;
  bottom: 15%;
  right: 0;
  font-size: calc(10px + (64 - 44) * ((100vw - 320px) / (1700 - 320))) !important;
  text-align: left;
  font-family: Montserrat;
  color: #c0c3c4;
  pointer-events: none;
}

@media (min-width: 1400px){
  .break-small {
    display: none;
  }
}

.contact-link {
  /* see .contactLine - position: fixed breaks under this app's global
     zoom, so absolute is used instead */
  position: absolute;
  top: 38%;
  left: 22%;
  text-align: left;
  text-decoration: none;
  user-select: none;  
  -webkit-tap-highlight-color: transparent;
  /* the 12vw cap alone made "Let's talk." huge on short/wide (landscape)
     screens, tall enough to collide with .contactLine once it was moved
     closer above; 18vh caps it by height too on those screens */
  font-size: min(calc(100px + (64 - 22) * ((110vw - 1620px) / (1600 - 320))), 12vw, 12vh) !important;
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

.socialZoom {
  zoom: 1.5;
}

/* at this zoom, 4 icons don't fit on one line below ~480px wide and
   wrap to a 2nd row, which grows .buttonGroup tall enough to overlap
   .contactLine above it (both are bottom-anchored independently) */
@media (max-width: 480px), (max-height: 500px) {
  .socialZoom {
    zoom: 1;
  }
}

/* short landscape phones are still tight even at zoom:1 */
@media (max-height: 400px) {
  .socialZoom {
    zoom: 0.75;
  }
}

.buttonGroup {
  /* see .contactLine - position: fixed breaks under this app's global
     zoom, so absolute is used instead */
  position: absolute;
  left: 22%;
  /* the gap above (to .contactLine) and below (to the viewport edge)
     both need to hold on short landscape screens where the icon row
     is proportionally much taller relative to the viewport - see the
     socialZoom media queries above */
  bottom: 5%;
  right: 0;
}

.contactIcon {
  /* fixed 50px per icon doesn't fit 4 icons in the available width on
     narrow screens, wrapping the row to a 2nd line and pushing it up
     into "Find me online:" above; shrink the gap on narrow viewports
     so the row stays on one line */
  padding-right: clamp(8px, 3vw, 50px);
}


.contactButton1:hover {
  transform: scale(1.6);
  transition: transform 0.4s ease-in-out;
  color: #2867B2;
}
.contactButton2:hover {
transform: scale(1.6);
transition: transform 0.4s ease-in-out;
color: #24292e;
}
.contactButton3:hover {
transform: scale(1.6);
transition: transform 0.4s ease-in-out;
color: #3b5998;
}
.contactButton4:hover {
transform: scale(1.6);
transition: transform 0.4s ease-in-out;
color: #1DA1F2;
}
`;


export const Wrapper = styled.section`
  padding: 1em;
  background: #5D5C61;
`;
