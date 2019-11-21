// @flow
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fp from 'lodash/fp';
import { Introduction } from './pages/introduction';
import { Civilization } from './pages/civilization';
import { dirs } from '../model/common';

interface IAppProps {

}

const withStyles = (Component) => (props) => (
  <React.Fragment>
    <style>
    </style>
    <Component { ...props } />
  </React.Fragment>
);

const slides = [Introduction, Civilization];

const App = (props: IAppProps) => {
  const [slide, setSlide] = useState<number>(0);
  const [direction, setDirection] = useState<$Values<typeof dirs>>(dirs.fwd);
  const onNextClick = () => slides[slide + 1] ? fp.flow([
    () => setSlide(slide + 1),
    () => setDirection(dirs.fwd)
  ])() : undefined;
  const onPrevClick = () => slide - 1 >= 0 ? fp.flow([
    fp.tap(console.log),
    () => setSlide(slide - 1),
    () => setDirection(dirs.bck)
  ])() : undefined;
  const mapSlideItem = (Component, index) => (
    <Component
      onNextClick={ onNextClick }
      onPrevClick={ onPrevClick }
      slide={ slide }
      direction={ direction }
      active={ slide === index }
      visited={ index < slide }
      key={ index }
    />
  );
  return (
    slides.map(mapSlideItem)
  );
};

const appElement = document.getElementById('app');

const AppWithProviders = fp.flow([withStyles])(App);

if (appElement)
  ReactDOM.render(<AppWithProviders />, appElement);
