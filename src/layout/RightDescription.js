import React from 'react';
import styled from 'styled-components';
import fp from 'lodash/fp';

const RightDescriptionEl = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: white;
  flex: 400px 0 0;
  border-radius: 60px;
  animation: rightDescription .7s ease-out;
  position: relative;

  @keyframes rightDescription {
    0% {
      transform: translateX(15%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const RightDescription = (props) => {
  const { children } = props;
  return (
    <RightDescriptionEl>
      { children }
    </RightDescriptionEl>
  );
}