// @flow
import React from 'react';
import styled from 'styled-components';

interface IDescriptionProps {
  h2: string;
  h1: string;
  content: any;
  bottomNav: any;
}

const DescriptionEl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 100px 35px;
  box-sizing: border-box;
  h2 {
    font-size: 16px;
    font-weight: 300;
    text-transform: capitalize;
    margin-bottom: 9px;
  }
  h1 {
    font-size: 40px;
    font-weight: 700;
    margin-top: 0px;
  }
`;

export const Description = (props: IDescriptionProps) => {
  const { h2, h1, content, bottomNav } = props;
  return (
    <DescriptionEl>
      <div>
        <h2>{ h2 }</h2>
        <h1>{ h1 }</h1>
        { content }
      </div>
      { bottomNav }
    </DescriptionEl>
  );
}
