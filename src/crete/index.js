// @flow
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fp from 'lodash/fp';
import { Introduction } from './pages/introduction';

interface IAppProps {

}

const withStyles = (Component) => (props) => (
  <React.Fragment>
    <style>
    </style>
    <Component { ...props } />
  </React.Fragment>
);

const slides = [Introduction];

const App = (props: IAppProps) => {
  const [slide, setSlide] = useState<number>(0);
  const onNextClick = () => slides[slide + 1] ? setSlide(slide + 1) : undefined;
  const onPrevClick = () => slide - 1 >= 0 ? setSlide(slide - 1) : undefined;
  const mapSlideItem = (Component, index) => (
    <Component
      onNextClick={ onNextClick }
      onPrevClick={ onPrevClick }
      slide={ slide }
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
