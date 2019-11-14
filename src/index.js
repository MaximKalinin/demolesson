// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { AppWrapper } from './layout/AppWrapper';
import './index.css';
import { LeftMenu } from './layout/LeftMenu';
import { Main } from './layout/Main';
import { RightDescription } from './layout/RightDescription';
import watchImg from '../img/watch.svg';
import readImg from '../img/read.svg';
import scrollImg from '../img/scroll.svg';
import zeusImg from '../img/zeus.svg';
import heavenImg from '../img//heaven.svg';
import { Description } from './components/Description';
import { TopNav } from './components/TopNav';

import { introduction } from './pages/introduction';
import { Scene } from './components/Scene';

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

const App = (props: IAppProps) => {
  return (
    <AppWrapper>
      <LeftMenu actions={ actions } />
      <Main>
        <div style={ { display: 'flex', flexDirection: 'row-reverse', height: '100%' } }>
          <RightDescription>
            <Description
              { ...introduction }
            />
          </RightDescription>
          <Scene>
            <TopNav
              chapter={ '2. БОГИ' }
              list={ ['Введение', 'Хаос', 'ПАНТЕОН', 'Уран', 'Кронос', 'Зевс', 'Аид', 'Посейдон', 'Другие боги', 'ФИНАЛ'] }
            />
            <img src={ zeusImg } style={ { maxWidth: '100%', marginTop: '60px' } } />
          </Scene>
          <div style={ {
            margin: '40px 0 40px 40px',
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
}

const appElement = document.getElementById('app');

if (appElement)
  ReactDOM.render(<App />, appElement);