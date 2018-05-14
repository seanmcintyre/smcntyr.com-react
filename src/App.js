import React, { Component } from 'react';
import styled from 'styled-components';

import logo from './logo.svg';
import './styles';

import { AppWrapper }from './App.styled';

import { Clock } from './Clock/Clock';

const skyline = () => 'foo';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Clock></Clock>

        <main>
          <h1>Sean McIntyre</h1>
          <span className="discipline">Product Designer, Engineer</span>

          {/*<about></about>*/}

          <div className="stats">
            <a className="resume"
              href="assets/resume.pdf"
              target="_blank">
              <div className="icon">👩🏻‍🎤</div>
              <em>download my resume</em>
            </a>

            <a className="portfolio"
              href="mailto:hello@smcntyr.com"
              target="_blank">
              <div className="icon">🎨</div>
              <em>contact for my portfolio</em>
            </a>

            <span className="current">
              <em>current tech interests</em><br />
              <span>TypeScript</span>
              <span>GraphQL</span>
              <span>Angular 6</span>
              <span>React</span>
              <span>Web Animation</span>
              <span>SVG</span>
              <span>CSS Grid</span>
              <span>PostCSS</span>
              <span>RxJS</span>
              <span>Progressive Web Apps</span>
            </span>
          </div>
        </main>

        <img className="skyline"
          src={skyline()}
          alt="" />

      </AppWrapper>
    );
  }
}

export default App;
