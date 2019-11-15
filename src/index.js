// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { AppWrapper } from './layout/AppWrapper';
import './index.css';
import { LeftMenu } from './layout/LeftMenu';
import { Main } from './layout/Main';
import { RightDescription } from './layout/RightDescription';
import watchImg from '../img/watch.svg';
import readImg from '../img/read.svg';
import scrollImg from '../img/scroll.svg';
import TouchBackend from 'react-dnd-touch-backend';
import { DndProvider } from 'react-dnd';
import heavenImg from '../img/heaven.svg';
import { Description } from './components/Description';
import { TopNav } from './components/TopNav';

import { introduction, introductionBody } from './pages/introduction';
import { Scene } from './components/Scene';
import { haos, haosBody } from './pages/haos';

const content = [{ description: introduction, body: introductionBody }, { description: haos, body: haosBody }];

const actions = [{
  text: 'Смотри',
  src: watchImg
}, {
  text: 'Читай',
  src: readImg
}, {
  text: 'Скролль',
  src: scrollImg
}];

interface IAppProps {

}

const ISlideEl = styled.div`
  position: absolute;
  top: ${({top}) => top && top || 0};
  right: 0;
  bottom: 0;
  left: 0;
  visibility: hidden;
  &.current {
    visibility: visible;
    animation: slideInCurrent 1s ease-out;
  }
  &.prev {
    visibility: visible;
    opacity: 0;
    animation: slideOutCurrent 1s ease-out;
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

const withDndProvider = (Component) => (props) => <DndProvider backend={TouchBackend}><Component {...props}/></DndProvider>;

const App = (props: IAppProps) => {
  const [slide, setSlide] = useState<number>(0);
  const onNextClick = () => content[slide + 1] ? setSlide(slide + 1) : undefined;
  const onPrevClick = () => slide - 1 >= 0 ? setSlide(slide - 1) : undefined;
  return (
    <AppWrapper>
      <LeftMenu actions={ actions } />
      <Main>
        <div style={ { display: 'flex', flexDirection: 'row-reverse', height: '100%' } }>
          <RightDescription>
            { content.map(({ description }, index) => (
              <ISlideEl className={ index === slide && 'current' || index === (slide - 1) && 'prev' || '' } key={index}>
                <Description
                  { ...description({ onNextClick, onPrevClick }) }
                />
              </ISlideEl>
            )) }
          </RightDescription>
          <Scene>
            <TopNav
              chapter={ '2. БОГИ' }
              list={ ['Введение', 'Хаос', 'ПАНТЕОН', 'Уран', 'Кронос', 'Зевс', 'Аид', 'Посейдон', 'Другие боги', 'ФИНАЛ'] }
              slide={ slide }
            />
              { content.map(({ body }, index) => (<ISlideEl top={'64px'} className={ index === slide && 'current' || index === (slide - 1) && 'prev' || '' } key={index}>{ body() }</ISlideEl>)) }
          </Scene>
          <div style={ {
            margin: '87px 0 40px 40px',
            height: '44px',
            background: 'white',
            flex: '44px 0 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '16px'
          } }>
            <img src={ heavenImg } style={ { height: '30px' } } />
          </div>
        </div>
      </Main>
    </AppWrapper>
  );
};

const appElement = document.getElementById('app');

const AppWithProviders = withDndProvider(App);

if (appElement)
  ReactDOM.render(<AppWithProviders />, appElement);
