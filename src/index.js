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
          <RightDescription />
        </div>
      </Main>
    </AppWrapper>
  );
}

const appElement = document.getElementById('app');

if (appElement)
  ReactDOM.render(<App />, appElement);