import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { BottomNav } from '../components/BottomNav';
import { AppIcon } from '../components/AppIcon';
import universeImg from '../../img/universe-placeholder.svg';
import { ISlideProps, BigP, B } from './introduction';

export const haos = ({ onNavClick }: ISlideProps) => ({
  h2: 'Хаос',
  h1: 'Но в начале не было ничего...',
  content: <React.Fragment>
    <p>
      Я поймал для тебе <B>старину Хаоса</B>.
    </p>
    <AppIcon />
    <p>
      Помести <b>Хаос</b> на свое место, и мы откроем происхождение древнегреческих богов - ПАНТЕОН.
    </p>
  </React.Fragment>,
  bottomNav: <BottomNav next={ 'Пантеон' } onClick={ onNavClick } />
});

export const haosBody = () => {
  const [, drop] = useDrop({
    accept: 'AppIcon',
    drop: () => console.log(drop),
  });
  return (
    <div style={{position: 'relative', marginTop: 'calc(60px + 44px)'}}>
      <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <div style={{border: '1px dashed black', width: '70px', height: '70px', borderRadius: '10px', padding: '10px'}} ref={drop}>
          <div style={{
            borderRadius: '50%',
            background: 'white',
            height: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '40px',
            color: '#D4D4D4'
          }}>+</div>
        </div>
      </div>
      <img src={ universeImg } style={ { width: '100%' } } />
    </div>
  );
};
