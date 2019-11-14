import React from 'react';
import styled from 'styled-components';
import { BottomNav } from '../components/BottomNav';

const BigP = styled.p`
  font-size: 26px;
  margin-top: 39px;
`;

const B = styled.b`
  font-weight: 600;
`;

export const introduction = {
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
  bottomNav: <BottomNav next={ 'Хаос' } />
}