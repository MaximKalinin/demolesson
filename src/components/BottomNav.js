// @flow
import React from 'react';
import styled from 'styled-components';

import scrollImg from '../../img/scroll-black.svg';

interface IBottomNavProps {
  next: string;
}

const Next = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 700;
`;

const BottomNavEl = styled.div`
  display: flex;
  img {
    margin-right: 24px;
  }
  span:last-child {
    font-size: 12px;
  }
`;

export const BottomNav = (props: IBottomNavProps) => {
  const { next } = props;
  return (
    <BottomNavEl>
      <img src={ scrollImg } />
      <div>
        <Next>{ next }</Next>
        <span>Далее</span>
      </div>
    </BottomNavEl>
  );
}