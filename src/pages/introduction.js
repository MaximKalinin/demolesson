// @flow
import React from 'react';
import styled from 'styled-components';
import { BottomNav } from '../components/BottomNav';
import zeusImg from '../../img/zeus.svg';
import heavenImg from '../../img/heaven.svg';
import { CrowdSay } from '../components/CrowdSay';
import fp from 'lodash/fp';
import { Description } from '../components/Description';
import { BookPage } from '../layout/BookPage';
import { TopNav } from '../components/TopNav';

export const BigP = styled.p`
  font-size: 26px;
  margin-top: 39px;
`;

export const B = styled.b`
  font-weight: 600;
`;

export interface ISlideProps {
  onNextClick: Function;
  onPrevClick: Function;
}

const crowdSay = [{
  text: 'Топчик!',
  y: `75%`,
  x: `5%`,
  translateX: '-10px',
  translateY: '-10px',
  animation: 'fading-1',
  delay: '0.5s'
}, {
  text: 'Наш кумир!',
  y: `85%`,
  x: `10%`,
  translateX: '-10px',
  translateY: '-10px',
  animation: 'fading-1',
  delay: '0.4s'
}, {
  text: 'Божественен!',
  y: `70%`,
  x: `15%`,
  translateX: '-10px',
  translateY: '-10px',
  animation: 'fading-1',
  delay: '0.7s',
  rotate: '15',
}, {
  text: 'ЗЕВС лучший!',
  y: `85%`,
  x: `90%`,
  translateX: '10px',
  translateY: '10px',
  animation: 'fading-2',
  delay: '0.6s'
}, {
  text: 'Красава!',
  y: `82%`,
  x: `80%`,
  translateX: '10px',
  translateY: '10px',
  animation: 'fading-2',
  delay: '0.7s'
}, {
  text: 'ЛАЙК!',
  y: `71%`,
  x: `85%`,
  translateX: '10px',
  translateY: '10px',
  animation: 'fading-2',
  delay: '0.3s'
}];

export const introduction = ({ onNextClick }: ISlideProps) => ({
  h2: 'Введение',
  h1: 'Боги Древней Греции',
  content: <React.Fragment>
    <BigP>
      <B>Слушай, Макс</B>
    </BigP>
    <p>
      Во времена <B>Древней Греции</B> люди свято чтили сотни <B>различных божеств</B>, во главе которых стоял эгидодержавный <B>Зевс.</B> Боги не только помогали им в повседневных делах, но и <B>вершили судьбы</B> целых городов и народов.
    </p>
  </React.Fragment>,
  bottomNav: <BottomNav next={ 'Хаос' } onNext={ onNextClick } />
});

// export const introductionBody = () => ();

interface IIntroductionProps {
  onNextClick: Function;
  slide: number;
  active: boolean;
  visited: boolean;
}

export const IntroductionPage = (props: IIntroductionProps) => {
  const { onNextClick, slide, active, visited } = props;
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
            background: `url(${zeusImg})`,
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            position: 'relative'
          } }
        >
          { crowdSay.map(say => <CrowdSay key={ say.text } { ...say } />) }
        </div>
      </div>
      <Description
        h2={ 'Введение' }
        h1={ 'Боги Древней Греции' }
        bottomNav={ <BottomNav
          next={ 'Хаос' }
          onNext={ onNextClick }
          className={ 'slideable' }
        /> }
        className={ 'row-grid' }
      >
        <BigP>
          <B>Слушай, Макс</B>
        </BigP>
        <p>
          Во времена <B>Древней Греции</B> люди свято чтили сотни <B>различных божеств</B>, во главе которых стоял эгидодержавный
            <B>Зевс.</B> Боги не только помогали им в повседневных делах, но и <B>вершили судьбы</B> целых городов и народов.
          </p>
      </Description>
    </BookPage>
  );
};
