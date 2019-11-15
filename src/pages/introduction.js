import React from 'react';
import styled from 'styled-components';
import { BottomNav } from '../components/BottomNav';
import zeusImg from '../../img/zeus.svg';

export const BigP = styled.p`
  font-size: 26px;
  margin-top: 39px;
`;

export const B = styled.b`
  font-weight: 600;
`;

export interface ISlideProps {
  onNavClick: Function;
}

export const introduction = ({ onNavClick }: ISlideProps) => ({
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
  bottomNav: <BottomNav next={ 'Хаос' } onClick={ onNavClick } />
});

export const introductionBody = () => (<div style={{
  background: `url(${zeusImg})`,
  width: '100%',
  height: '100%',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
}}/>);
