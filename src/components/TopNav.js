import React from 'react';
import styled from 'styled-components';

const TopNavEl = styled.div`
  /* position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%); */
  border-radius: 16px;
  background: white;
  overflow: hidden;
  height: 44px;
  animation: topNavEl .7s ease-out;

  @keyframes topNavEl {
    0% {
      opacity: 0;
      transform: translateY(-60%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ScrollBar = styled.div`
  position: relative;
  height: 10px;
  > span {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: red;
    border-right: 1px solid white;
    width: 10%;
  }
  > div {
    height: 100%;
    width: 100%;
    background: #D8D8D8;
  }
`;

const Chapter = styled.span`
  font-weight: 300;
  font-size: 10px;
  padding: 10px 0;
`;

const ContentList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
`;

export const TopNav = (props) => {
  const { chapter, list, active } = props;
  return (
    <TopNavEl>
      <ScrollBar>
        <span />
        <div />
      </ScrollBar>
      <ContentList>
        <Chapter>{ chapter }</Chapter>
        { list.map(text => <Chapter>{ text }</Chapter>) }
      </ContentList>
    </TopNavEl>
  );
}
