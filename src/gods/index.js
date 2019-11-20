// @flow
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import fp from 'lodash/fp';
import { IntroductionPage } from './pages/introduction';
import { HaosPage } from './pages/haos';

interface IAppProps {

}

const withStyles = (Component) => (props) => (
  <React.Fragment>
    <style>
    </style>
    <Component { ...props } />
  </React.Fragment>
);

const App = (props: IAppProps) => {
  const [slide, setSlide] = useState<number>(0);
  const onNextClick = () => slides[slide + 1] ? setSlide(slide + 1) : undefined;
  const onPrevClick = () => slide - 1 >= 0 ? setSlide(slide - 1) : undefined;
  const slides = [
    (index) => <IntroductionPage
      onNextClick={ onNextClick }
      slide={ slide }
      active={ slide === index }
      visited={ index < slide }
      key={ index }
    />,
    (index) => <HaosPage
      onNextClick={ onNextClick }
      onPrevClick={ onPrevClick }
      slide={ slide }
      active={ slide === index }
      visited={ index < slide }
      key={ index }
    />
  ];
  return (
    slides.map((slideItem, index) => slideItem(index))
  );
};

const appElement = document.getElementById('app');

const AppWithProviders = fp.flow([withStyles])(App);

if (appElement)
  ReactDOM.render(<AppWithProviders />, appElement);
