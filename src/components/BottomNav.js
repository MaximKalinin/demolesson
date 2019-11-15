// @flow
import React from 'react';
import styled from 'styled-components';

import scrollImg from '../../img/scroll-black.svg';

interface IBottomNavProps {
  next: string;
  onClick: Function;
}

const Next = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 700;
`;

const BottomNavEl = styled.div`
  & * {
    user-select: none;
  }
  cursor: pointer;
  &:hover {
    color: blue;
  }
  img {
    margin-right: 24px;
  }
  span:last-child {
    font-size: 12px;
  }
`;

export const BottomNav = (props: IBottomNavProps) => {
  const { next, onNext, back, onBack } = props;
  return (
    <div style={ {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row-reverse'
    } }>
      <BottomNavEl onClick={ onNext }>
        <Next>{ next }</Next>
        <span>Далее</span>
      </BottomNavEl>
      { back &&
        <BottomNavEl onClick={ onBack }>
          <Next>{ back }</Next>
          <span>Назад</span>
        </BottomNavEl>
      }
    </div>
  );
}
