import React from 'react';
import styled from 'styled-components';

const SceneEl = styled.div`
  margin: 87px 40px;
  flex-grow: 1;
  position: relative;
  > img {
    animation: fadeIn .7s ease-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Scene = (props) => {
  const { children } = props;
  return (
    <SceneEl>{ children }</SceneEl>
  );
}
