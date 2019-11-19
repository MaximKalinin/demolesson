// @flow
import React from 'react';
import styled from 'styled-components';
import { useDrop } from 'react-dnd';
import { BottomNav } from '../components/BottomNav';
import { AppIcon } from '../components/AppIcon';
import universeImg from '../../img/universe-placeholder.svg';
import { ISlideProps, BigP, B } from './introduction';
import zeusImg from "../../img/zeus.svg";
import { TopNav } from '../components/TopNav';
import heavenImg from '../../img/heaven.svg';
import { BookPage } from '../layout/BookPage';
import { Description } from '../components/Description';

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
  bottomNav: <BottomNav next={ 'Пантеон' } onNext={ onNextClick } onBack={ onPrevClick } back={ 'Хаос' } />
});

export const haosBody = () => {
  const [{ isOver }, drop] = useDrop({
    accept: 'AppIcon',
    drop: () => console.log(drop),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });
  console.log({ isOver });
  return (
    <div style={ {
      position: 'relative',
      width: '100%',
      height: '100%'
    } }>
      <div style={ { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } }>
        <div
          style={ {
            border: '1px dashed black',
            width: '70px',
            height: '70px',
            borderRadius: '10px',
            padding: '10px'
          } }
          ref={ drop }
        >
          <div style={ {
            borderRadius: '50%',
            background: 'white',
            height: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '40px',
            color: '#D4D4D4'
          } }>+</div>
        </div>
      </div>
      <div style={ {
        background: `url(${universeImg})`,
        boxSizing: 'border-box',
        width: '90%',
        margin: 'auto',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      } } />
    </div>
  );
};

export const leftHeader = (<span style={ {
  transform: 'rotate(-90deg) scale(2)',
  textTransform: 'uppercase',
  display: 'block',
  fontFamily: 'Times',
  marginTop: '30vh',
  fontSize: '30px',
  position: 'absolute'
} }>χάος</span>);

interface IHaosProps {
  active: boolean;
  slide: number;
  onNextClick: Function;
  onPrevClick: Function;
  visited: boolean;
}

export const HaosPage = (props: IHaosProps) => {
  const { active, slide, onNextClick, onPrevClick, visited } = props;
  return (
    <BookPage active={ active } visited={ visited }>
      <div className="row-grid content-grid">
        <div className={ 'heaven-button top-row' }>
          <img src={ heavenImg } />
        </div>
        <TopNav
          slide={ slide }
          chapter={ '2. БОГИ' }
          list={ ['Введение', 'Хаос', 'ПАНТЕОН', 'Уран', 'Кронос', 'Зевс', 'Аид', 'Посейдон', 'Другие боги', 'ФИНАЛ'] }
        />
        <div />
        <div
          className="slideable"
          style={ {
            position: 'relative',
            width: '100%',
            height: '100%',
            padding: '20px',
            boxSizing: 'border-box'
          } }
        >
          <div style={ { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } }>
            <div
              style={ {
                border: '1px dashed black',
                width: '70px',
                height: '70px',
                borderRadius: '10px',
                padding: '10px'
              } }
            >
              <div style={ {
                borderRadius: '50%',
                background: 'white',
                height: '100%',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '40px',
                color: '#D4D4D4'
              } }>+</div>
            </div>
            <div style={ {
              position: 'absolute',
              bottom: '-70px',
              width: 'calc(92 * 2px)',
              transform: 'translateX(-25%)',
              textAlign: 'center'
            } }>Здесь могла бы быть ваша вселенная</div>
          </div>
          <div style={ {
            background: `url(${universeImg})`,
            boxSizing: 'border-box',
            width: '90%',
            margin: 'auto',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          } } />
        </div>
      </div>
      <Description
        h2={ 'Введение' }
        h1={ 'Боги Древней Греции' }
        bottomNav={ <BottomNav
          next={ 'Пантеон' }
          onNext={ onNextClick }
          onBack={ onPrevClick }
          back={ 'Хаос' }
          className={ 'slideable' }
        /> }
        className={ 'row-grid' }
      >
        <p>
          Я поймал для тебе <B>старину Хаоса</B>.
        </p>
        <AppIcon />
        <p>
          Помести <b>Хаос</b> на свое место, и мы откроем происхождение древнегреческих богов - ПАНТЕОН.
        </p>
      </Description>
    </BookPage>
  );
};
