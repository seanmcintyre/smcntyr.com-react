import { injectGlobal } from 'styled-components';

const fontstack =  `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

export default injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Merriweather:900,900i|Tajawal:400,500|Roboto+Mono:400');

  html {
    box-sizing: border-box;
    font: 400 18px / 18px ${fontstack};
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(rgb(35, 155, 255), 0.1);
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    color: rgb(50, 50, 50);
    font-family: 'Tajawal', serif;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background: rgb(40, 40, 40);
    width: 100%;
  }

  *, *::before, *::after {
    font: inherit;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    text-decoration: none;
    color: inherit;
    outline: 0;
    background: transparent;
  }
`
