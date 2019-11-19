// @flow
import React from 'react';
import type { ChildrenArray } from 'react';
import styled from 'styled-components';

interface IDescriptionProps {
  h2: string;
  h1: string;
  children: any;
  bottomNav: any;
  className: string;
}

const H2 = styled.h2`
  font-size: 16px;
  font-weight: 300;
  text-transform: capitalize;
  margin-bottom: 0px;
  margin-top 0;
`;

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-top: 0px;
`;

const RightDescriptionEl = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: white;
  flex: 400px 0 0;
  border-radius: 50px;
  /* animation: rightDescription .7s ease-out; */
  position: relative;
  padding: 0 60px 100px 60px;

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

export const Description = (props: IDescriptionProps) => {
  const { h2, h1, children, bottomNav, className } = props;
  return (
    <RightDescriptionEl className={ className }>
      <div className="top-row slideable">
        <H2>{ h2 }</H2>
      </div>
      <div className="slideable">
        <H1>{ h1 }</H1>
        { children }
      </div>
      { bottomNav }
    </RightDescriptionEl>
  );
}
