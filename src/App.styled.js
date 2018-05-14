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

  .stats {
  border-top: 1px solid rgba(white, 0.334);
  border-bottom:  1px solid rgba(white, 0.334);
  padding: 50px 0;
  overflow: hidden;

  @media screen and (min-width: 720px) {
    display: flex;
    text-align: center;
  }

  .icon {
    margin: 0 auto 0;
    font-size: 2em;
    line-height: 1.3em;
    vertical-align: text-top;
  }

  .resume,
  .current,
  .portfolio {
    display: block;
    padding: 20px 50px;
    margin: 0 auto;

    em {
      font-style: italic;
      font-weight: 700;
    }

    span {
      @include tag;
      margin: 10px 15px 0 0;

      @media screen and (min-width: 720px) {
      margin: 10px 0 0 15px;
      }
    }
  }

  .resume,
  .portfolio {
      border: 1px solid rgba(white, 0.5);
      min-width: 150px;
      max-width: 150px;
      min-height: 150px;
      max-height: 150px;
      border-radius: 4px;
      margin: 0 50px 50px;
      padding: 30px 20px;
      transition: 100ms;
      background: rgba(white, 0);
      text-align: center;

      @media screen and (min-width: 720px) {
        display: inline-block;
        margin: 0 0 0 50px;
      }

      &:hover {
        transform: scale(1.02) translateY(-1px);
        border: 1px solid rgba(white, 0.8);
        background: rgba(white, 0.05);
      }
  }

  .portfolio {
    display: none;
    @media screen and (min-width: 720px) {
      display: inline-block;
    }
  }

}

.work {
  float: left;
  padding-top: 50px;

  h3 {
    padding: 15px 50px;
    display: block;
    font-size: 1em;
    font-weight: 300;
    font-family: 'roboto mono', monospace;
    padding-bottom: 50px;
  }

  &.collapse {
    max-width: 60px;
    transition: 300ms;
    margin-right: 50px;

    > div {
      padding: 20px 0;
      border-bottom: 1px dashed rgba(white, 0);
    }

    > div > *:first-child {
      margin-right: 0;
    }

    > div > *:nth-child(n+2) {
      opacity: 0;
    }
  }


  > div {
    padding: 20px 50px;
    display: block;
    color: white;
    border-bottom: 1px dashed rgba(white, 0.3);
    display: flex;
    transition: 450ms;

    > *:first-child {
      display: inline-block;
      width: 60px;
      height: 60px;
      padding: 10px;
      display: flex;
      margin-right: 32px;
      justify-content: center;
      border: 1px solid rgba(white, 0.5);
      border-radius: 3px;
    }

    .role {
      @include tag;
    }
  }

  .northstreet {
    margin-bottom: 80px;
  }
}
`
