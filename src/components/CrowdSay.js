import React from 'react';
import styled from 'styled-components';

const SpanEl = styled.span`
  font-family: 'Greek';
  font-size: ${({ size }) => size && `${size}px` || '16px'};
  position: absolute;
  top: ${({ y }) => y && y || 0};
  left: ${({ x }) => x && x || 0};
  animation: ${({ animation }) => animation || 'fading-1'} 1s infinite;
  animation-delay: ${({ delay }) => delay || '0s'};

  @keyframes fading-1 {
    0% {
      opacity: 0;
      transform: translate(-10px, 10px)
    }
    30% {
      opacity: 1;
      transform: none;
    }
    60% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: translate(10px, -10px);
    }
  }

  @keyframes fading-2 {
    0% {
      opacity: 0;
      transform: translate(10px, 10px)
    }
    30% {
      opacity: 1;
      transform: none;
    }
    60% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
      transform: translate(-10px, -10px);
    }
  }
`;

export const CrowdSay = (props) => {
  const { text, ...otherProps } = props;
  return (<SpanEl { ...otherProps }>{ text }</SpanEl>);
}