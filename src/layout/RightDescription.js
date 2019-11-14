import React from 'react';
import styled from 'styled-components';

const RightDescriptionEl = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px 35px;
  box-sizing: border-box;
  background: white;
  flex: 28% 0 0;
  border-radius: 60px;
  animation: rightDescription .7s ease-out;

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