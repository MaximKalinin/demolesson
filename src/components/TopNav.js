import React from 'react';
import styled from 'styled-components';

const TopNavEl = styled.div`
`;

const NavWrapper = styled.div`
  & .top-nav {
    border-radius: 10px;
    background: white;
    overflow: hidden;
    height: 44px;
    animation: topNavEl .7s ease-out;
    z-index: 100;
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & .scroll-bar {
    position: relative;
    height: 7px;
    > span {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      background: linear-gradient(90deg, #FFD75B 0vw, #FFB593 10vw);
      border-right: 1px solid white;
      width: ${({ width }) => `${width}%`};
      transition: width .3s;
    }
    > div {
      height: 100%;
      width: 100%;
      background: #D8D8D8;
    }
  }

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
`;

const Chapter = styled.span`
  font-weight: 300;
  font-size: 10px;
  padding: 5px 0;
  height: 20px;
  display: flex;
  align-items: flex-end;
  transition: all .3s;
  &.active {
    font-size: 16px;
    font-weight: 600;
  }
`;

const ContentList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  align-items: flex-end;
`;

interface ITopNavProps {
  chapter: string;
  list: string[];
  slide: number;
}

export const TopNav = (props) => {
  const { chapter, list, slide } = props;
  return (
    <NavWrapper className="top-row" width={ (slide + chapter ? 1.5 : 1) / list.length * 100 }>
      <div className="top-nav">
        <div className="scroll-bar">
          <span />
          <div />
        </div>
        <ContentList>
          <Chapter>{ chapter }</Chapter>
          { list.map((text, index) => <Chapter key={ text } className={ slide === index && 'active' || '' }>{ text }</Chapter>) }
        </ContentList>
      </div>
    </NavWrapper>
  );
}
