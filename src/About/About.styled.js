import styled from 'styled-components';

export const AboutWrapper = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.98);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

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


  animation: fadeInA 270ms 300ms both ease-in-out;

  padding: 50px;
  ${'' /* animation: fadeIn 400ms 100ms both; */}
  text-align: left;
  line-height: 1.6em;
  font-size: 1.2em;
  display: block;


  p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.3em;
    text-align: left;
    margin-bottom: 30px;

    @media screen and (min-width: 720px) {
      font-size: 2.5rem;
      line-height: 1.3em;
    }

    em {
      font-style: italic;
      font-family: 'Merriweather';
      font-size: 0.84em;
      font-weight: 800;
      transform: skew(-12deg);
      display: inline-block;
    }
  }

  em {
    font-style: italic;
    font-weight: 800;
  }

  .fun {
  margin-top: 50px;
  font-family: 'roboto mono', monospace;
  font-size: 0.75rem;
}

h3 {
  font-weight: 800;
}


li {
  display: block;
  margin: 15px 0;
  vertical-align: top;
  line-height: 1.3em;
  padding-left: 50px;
  position: relative;

  @media screen and (min-width: 720px) {
    min-height: 2.5em;
    line-height: 2.5em;
  }
}

span {
  //line-height: 1.3em;
  display: block;
  vertical-align: middle;
}

.emoji {
  font-size: 1.75em;
  display: inline;
  vertical-align: middle;
  margin-right: 15px;
  transform: translateY(-49%);
  position: absolute;
  top: 50%;
  left: 0;

  @media screen and (min-width: 720px) {
    font-size: 2.5em;
  }
}
`
