import styled from 'styled-components';

export const AppWrapper = styled.div`
  @keyframes fadeInA {
    0% {
      opacity: 0;
      transform: scale(0.99) translateY(3px);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  h1           { animation: fadeInA 270ms 50ms both ease-in-out }
  .discipline  { animation: fadeInA 270ms 200ms both ease-in-out }
  about        { animation: fadeInA 270ms 300ms both ease-in-out }
  .resume      { animation: fadeInA 270ms 350ms both ease-in-out }
  .portfolio   { animation: fadeInA 270ms 400ms both ease-in-out }
  .current     { animation: fadeInA 270ms 450ms both ease-in-out }

  main {
    display: block;
    color: white;
    max-width: 1000px;
    margin: 100px auto;
  }

  .skyline {
    width: calc(100vw);
    margin: -150px 0 -60px;
  }

  h1,
  .discipline {
    padding: 5px 50px;
    display: block;
  }

  h1 {
    font-size: 1.5em;
    line-height: 1em;
    font-weight: 700;

    @media screen and (min-width: 720px) {
      font-size: 2.5em;
    }
  }

  .discipline {
    font-size: 0.75em;
    font-weight: 300;
    font-family: 'roboto mono', monospace;
    border-bottom: 1px solid rgba(white, 0.334);
    padding-bottom: 50px;

    @media screen and (min-width: 720px) {
      font-size: 1em;
    }
  }
`
