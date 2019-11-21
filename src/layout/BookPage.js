// @flow
import React, { useRef } from 'react';
import styled from 'styled-components';
import fp from 'lodash/fp';
import { LeftMenu2 } from './LeftMenu';
import { actions } from '../consts/left-menu-actions';
import { RightDescription } from './RightDescription';
import { transcode } from 'buffer';
import { renderIfPresent } from '../utils/renderIfPresent';
import { Component } from 'react';
import { TopNav } from '../components/TopNav';

import heavenImg from '../../img/heaven.svg';

const ColumnGrid = styled.div`
  display: grid;
  position: absolute;
  grid-template-columns: 150px 1fr;
  height: 100vh;
  width: 100vw;
  background-color: black;
  overflow: hidden;
  /* transform: translateY(100%); */
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
    overflow: hidden;
    div {
      position: relative;
      z-index: 11;
    }
    .full-screen-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  & .content-grid {
    display: grid;
    grid-template-columns: 74px 1fr;
    padding: 0 30px;
    position: relative;
    overflow: hidden;
    & .heaven-button {
      height: 44px;
      width: 44px;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 16px;
      margin-right: 30px;
      position: relative;
      z-index: 10;
      img {
        height: 50%;
      }
    }
  }
  &:not(.visited) .slide-in {
    transform: translateY(100vh);
    opacity: 0;
    transition: transform .7s, opacity .7s;
    z-index: 10;
  }
  &:not(.visited) .fade-in {
    /* transform: translateY(100vh); */
    opacity: 0;
    transition: opacity .7s;
    z-index: 10;
  }
  &:not(.visited) .zoom-in {
    transform: scale(0.3, 0.3);
    opacity: 0;
    transition: transform .7s, opacity .7s;
    z-index: 10;
  }
  & .slideable {
    transform: translateY(100vh);
    opacity: 0;
    transition: transform .7s, opacity .7s;
    z-index: 10;
  }
  &.active {
    /* transform: none; */
    .slideable {
      transform: none;
      opacity: 1;
    }
    .slide-in, .fade-in, .zoom-in {
      transform: none;
      opacity: 1;
    }
    .fade-in {
      opacity: 1;
    }
  }
  &.visited {
    transform: translateY(-100%);
    .slide-out {
      transition: transform .7s, opacity .7s;
      transform: translateY(-100vh);
      opacity: 0;
      z-index: 10;
    }
    .fade-out {
      /* transform: translateY(-100vh); */
      transition: opacity .7s;
      opacity: 1;
      z-index: 10;
    }
    .zoom-out {
      transition: transform .7s, opacity .7s;
      transform: scale(3, 3);
      opacity: 0;
      z-index: 10;
    }
    .slideable {
      transform: translateY(-100vh);
      opacity: 0;
      z-index: 10;
    }
  }
`;

interface IBookPageProps {
  children: any;
  active: boolean;
  visited: boolean;
  FullScreenImage?: Component<any>;
  fullScreenImageProps?: any;
  slide: number;
}

export const BookPage = (props: IBookPageProps) => {
  const {
    children,
    active,
    visited,
    FullScreenImage,
    fullScreenImageProps,
    slide
  } = props;
  const pageRef = useRef();
  const classes = [active && 'active' || '', visited && 'visited' || '', 'grid'];
  return (
    <ColumnGrid ref={ pageRef } className={ active && 'active' || visited && 'visited' }>
      <LeftMenu2 actions={ actions } />
      <div className="text-and-content">
        <div className="row-grid content-grid">
          { renderIfPresent(FullScreenImage, fullScreenImageProps) }
        </div>
        <div className={ 'heaven-button top-row' }>
          <img src={ heavenImg } />
        </div>
        <TopNav
          slide={ slide }
          list={ ['Карта', 'Жители Крита', 'Кносский дворец', 'Падение цивилизации'] }
        />
        { children }
      </div>
    </ColumnGrid>
  );
}
