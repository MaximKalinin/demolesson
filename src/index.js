// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { AppWrapper } from './layout/AppWrapper';
import './index.css';
import { LeftMenu } from './layout/LeftMenu';
import { Main } from './layout/Main';
import { RightDescription } from './layout/RightDescription';
import greekFont from '../fonts/Greek.ttf';
import TouchBackend from 'react-dnd-touch-backend';
import { DndProvider } from 'react-dnd';
import { Description } from './components/Description';
import { TopNav } from './components/TopNav';
import fp from 'lodash/fp';
import { IntroductionPage } from './pages/introduction';
import { Scene } from './components/Scene';
import { haos, haosBody, leftHeader, HaosPage } from './pages/haos';
import { BookPage } from './layout/BookPage';

interface IAppProps {

}

const ISlideEl = styled.div`
  position: absolute;
  top: ${({ top }) => top && top || 0};
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transform: translateY(70%);
  transition: opacity 0.5s, transform 0.5s;
  &.current {
    opacity: 1;
    transform: translateY(0);
    z-index: 10;
  }
  &.prev {
    opacity: 0;
    transform: translateY(-70%);
  }
  @keyframes slideInCurrent {
    0% {
      transform: translateY(70%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slideOutCurrent {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-70%);
      opacity: 0;
    }
  }
`;

const withDndProvider = (Component) => (props) => <DndProvider backend={ TouchBackend }><Component { ...props } /></DndProvider>;
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
  // return (
  //   <AppWrapper>
  //     <LeftMenu actions={ actions } />
  //     <Main>
  //       <div style={ { display: 'flex', flexDirection: 'row-reverse', height: '100%' } }>
  //         <RightDescription>
  //           { content.map(({ description }, index) => (
  //             <ISlideEl className={ index === slide && 'current' || index === (slide - 1) && 'prev' || '' } key={ index }>
  //               <Description
  //                 { ...description({ onNextClick, onPrevClick }) }
  //               />
  //             </ISlideEl>
  //           )) }
  //         </RightDescription>
  //         <Scene>
  //           <TopNav
  //             chapter={ '2. БОГИ' }
  //             list={ ['Введение', 'Хаос', 'ПАНТЕОН', 'Уран', 'Кронос', 'Зевс', 'Аид', 'Посейдон', 'Другие боги', 'ФИНАЛ'] }
  //             slide={ slide }
  //           />
  //           { content.map(({ body }, index) => (<ISlideEl top={ '64px' } className={ index === slide && 'current' || index === (slide - 1) && 'prev' || '' } key={ index }>{ body() }</ISlideEl>)) }
  //         </Scene>
  //         <div style={ {
  //           margin: '87px 0 40px 40px',
  //           flex: '44px 0 0',
  //           position: 'relative'
  //         } }
  //         >
  //           <div style={ {
  //             height: '44px',
  //             background: 'white',
  //             display: 'flex',
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //             borderRadius: '16px',
  //           } }>
  //             <img src={ heavenImg } style={ { height: '30px' } } />
  //           </div>
  //           { content.map(({ leftHeader }, index) => (
  //             leftHeader &&
  //             <ISlideEl className={ index === slide && 'current' || index === (slide - 1) && 'prev' || '' } key={ index }>
  //               { leftHeader }
  //             </ISlideEl>
  //           )) }
  //         </div>
  //       </div>
  //     </Main>
  //   </AppWrapper>
  // );
  // const description = ({ className }) => (
  //   <Description
  //     className={ className }
  //     { ...content[0].description({ onNextClick, onPrevClick }) }
  //   />
  // );
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

const AppWithProviders = fp.flow([withDndProvider, withStyles])(App);

if (appElement)
  ReactDOM.render(<AppWithProviders />, appElement);
