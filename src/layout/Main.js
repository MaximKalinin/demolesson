import React from 'react';
import styled from 'styled-components';
import { WIDTH as LeftMenuWidth } from './LeftMenu';

const MainEl = styled.div`
  width: 100%;
  height: 100%;
  background: #F2F2F2;
  border-radius: 60px;
`;

export const Main = (props) => {
  const { children } = props;
  return (
    <MainEl>
      { children }
    </MainEl>
  );
}