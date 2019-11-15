import React from 'react';
import styled from 'styled-components';
import { BottomNav } from '../components/BottomNav';
import zeusImg from '../../img/zeus.svg';
import { ISlideProps, BigP, B } from './introduction';

export const haos = ({ onNavClick }: ISlideProps) => ({
  h2: 'Хаос',
  h1: 'Но в начале не было ничего...',
  content: <React.Fragment>
    <p>
      Я поймал для тебе <B>старину Хаоса</B>.
    </p>
    <p>
      Помести <b>Хаос</b> на свое место, и мы откроем происхождение древнегреческих богов - ПАНТЕОН.
    </p>
  </React.Fragment>,
  bottomNav: <BottomNav next={ 'Пантеон' } onClick={ onNavClick } />
});

export const haosBody = (<img src={ zeusImg } style={ { maxWidth: '100%', marginTop: 'calc(60px + 44px)' } } />);