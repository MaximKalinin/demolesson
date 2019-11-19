import React, { useRef } from 'react';
import styled from 'styled-components';
import fp from 'lodash/fp';
import { LeftMenu2 } from './LeftMenu';
import { actions } from '../consts/left-menu-actions';
import { RightDescription } from './RightDescription';

const ColumnGrid = styled.div`
  display: grid;
  position: absolute;
  grid-template-columns: 150px 1fr;
  height: 100vh;
  width: 100vw;
  background-color: black;
  overflow: hidden;
  & .row-grid {
    display: grid;
    grid-template-rows: 130px 1fr;
  }
  & .top-row {
    align-self: flex-end;
  }
  & .v-centered {
    align-self: center;
  }
  & .h-centered {
    justify-self: center;
  }
  & .text-and-content {
    display: grid;
    grid-template-columns: 1fr 400px;
    background: #F2F2F2;
    border-radius: 50px;
  }
  & .content-grid {
    display: grid;
    grid-template-columns: 74px 1fr;
    margin: 0 30px;
    & .heaven-button {
      height: 44px;
      width: 44px;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      margin-right: 30px;
      img {
        height: 50%;
      }
    }
  }
  & .slideable {
    transform: translateY(100vh);
    opacity: 0;
    transition: transform .7s, opacity .7s;
    z-index: 100;
    /* position: relative; */
  }
  & .fadeable {
    opacity: 0;
    transition: opacity .7s;
    z-index: 10;
  }
  &.active {
    /* animation: none; */
    .slideable {
      transform: none;
      opacity: 1;
    }
    .fadeable {
      opacity: 1;
    }
  }
  &.visited {
    /* animation: none; */
    .slideable {
      transform: translateY(-100vh);
      opacity: 0;
    }
    .fadeable {
      opacity: 0;
    }
  }

  /* @keyframes bookPage {
    0% {
      opacity: 0;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  } */
`;

interface IBookPageProps {
  children: any;
  active: boolean;
  visited: boolean;
}

export const BookPage = (props) => {
  const { children, active, visited } = props;
  const pageRef = useRef();
  const classes = [active && 'active' || '', visited && 'visited' || '', 'grid'];
  return (
    <ColumnGrid ref={ pageRef } className={ active && 'active' || visited && 'visited' }>
      <LeftMenu2 actions={ actions } />
      <div className="text-and-content">
        { children }
      </div>
    </ColumnGrid>
  );
}
