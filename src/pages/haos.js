import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { BottomNav } from '../components/BottomNav';
import { AppIcon } from '../components/AppIcon';
import universeImg from '../../img/universe-placeholder.svg';
import { ISlideProps, BigP, B } from './introduction';
import zeusImg from "../../img/zeus.svg";

export const haos = ({ onNextClick, onPrevClick }: ISlideProps) => ({
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
  bottomNav: <BottomNav next={ 'Пантеон' } onNext={ onNextClick } onBack={ onPrevClick } back={'Хаос'} />
});

export const haosBody = () => {
  const [{isOver}, drop] = useDrop({
    accept: 'AppIcon',
    drop: () => console.log(drop),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });
  console.log({isOver});
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%'
    }}>
      <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
        <div
          style={{
            border: '1px dashed black',
            width: '70px',
            height: '70px',
            borderRadius: '10px',
            padding: '10px'
          }}
          ref={drop}
        >
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
      <div style={{
        background: `url(${universeImg})`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}/>
    </div>
  );
};
