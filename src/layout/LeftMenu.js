import React from 'react';
import styled from 'styled-components';
import burgerMenuImg from '../../img/burger-menu.svg';

interface ILeftMenuProps {
  actions: Array<{
    text: string;
    src: string;
  }>;
}

export const WIDTH = 176;

const LeftMenuEl = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px 15px;
  position: relative;
  box-sizing: border-box;
`;

const ActionsEl = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const ActionEl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  > span {
    font-size: 14px;
    margin-bottom: 12px;
    display: block;
    font-weight: 300;
  }
  > img {
    margin-bottom: 65px;
  }
`;

export const LeftMenu = (props: ILeftMenuProps) => {
  const { actions } = props;
  return (
    <LeftMenuEl>
      <img src={ burgerMenuImg } />
      <ActionsEl>
        { actions.map(({ text, src }) => (
          <ActionEl key={ text }>
            <span>{ text }</span>
            <img src={ src } />
          </ActionEl>
        )) }
      </ActionsEl>
    </LeftMenuEl>
  );
}

export const LeftMenu2 = (props: ILeftMenuProps) => {
  const { actions } = props;
  return (
    <div className="row-grid">
      <div className="top-row h-centered">
        <img src={ burgerMenuImg } />
      </div>
      <div className="v-centered h-centered">
        { actions.map(({ text, src }) => (
          <ActionEl key={ text }>
            <span>{ text }</span>
            <img src={ src } />
          </ActionEl>
        )) }
      </div>
    </div>
  );
}