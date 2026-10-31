import styled from 'styled-components';

export const Wrapper = styled.section`
  /* relative + z-index keeps it above the fixed particle canvas */
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  max-width: 940px;
  margin: 0 auto;
  padding: clamp(64px, 8vh, 96px) 20px 8vh;
  font-family: Montserrat, sans-serif;

  .introLine {
    margin: 0 0 0.8em;
    font-size: clamp(36px, 5vw, 72px);
    font-weight: normal;
    text-align: center;
    color: #c0c3c4;
    user-select: none;
  }

  .cardGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
    gap: 28px;
  }

  .card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.94);
    color: #3a393e;
    text-decoration: none;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  a.card:hover,
  a.card:focus-visible {
    transform: translateY(-6px);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.35);
  }

  .thumb {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 180px;
    background: #47464b;
  }

  .thumb img {
    height: 128px;
    width: 128px;
    object-fit: contain;
  }

  .body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px 24px 22px;
  }

  h2 {
    margin: 0 0 0.4em;
    font-size: 1.25rem;
    font-weight: 600;
  }

  p {
    margin: 0;
    flex: 1;
    font-family: Lato, sans-serif;
    font-size: 1rem;
    line-height: 1.55;
    color: #5D5C61;
  }

  .cta {
    margin-top: 14px;
    font-size: 0.9rem;
    color: #557A95;
  }
`;
