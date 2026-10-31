import styled from 'styled-components';


export const Heading = styled.h1`
  /* normal flow (was absolutely positioned rows at fixed offsets, which
     overflowed off-screen whenever 3 x 420px cards didn't fit the width) -
     relative + z-index keeps it above the fixed particle canvas */
  position: relative;
  z-index: 1;
  margin: 0;
  padding: clamp(56px, 6vh, 72px) 0 8vh;

  .introLine {
    margin-bottom: 0.6em;
    font-size: clamp(36px, 5vw, 72px);
    font-weight: normal;
    text-align: center;
    pointer-events: none;
    user-select: none;
    font-family: Montserrat;
    color: #c0c3c4;
  }

  .cardGroup {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 40px;
    /* card titles inherit this; descriptions are fixed at 0.875rem by
       the library, so keep titles a step above that */
    font-size: clamp(17px, 1.3vw, 20px);
    font-weight: normal;
    font-family: Montserrat;
  }

  .cardRow1,
  .cardRow2 {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 40px 30px;
    font-family: Montserrat;
  }

  /* TaggedContentCard renders a fixed 420px-wide card with only
     max-width:100% to shrink it, which doesn't resolve against a
     column-direction flex parent - it stays 420px and overflows/clips
     on any viewport narrower than ~490px. Cap the actual card width
     instead of relying on the library's max-width. */
  .cardRow1 > a > div,
  .cardRow2 > a > div {
    width: min(420px, 85vw) !important;
  }
`;


export const Wrapper = styled.section`
`;
