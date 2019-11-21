// @flow
import React from 'react';
import styled from 'styled-components';
import { BookPage } from '../../layout/BookPage';
import heavenImg from '../../../img/heaven.svg';
import crete2Img from '../../../img/crete-map-2.svg';
import { TopNav } from '../../components/TopNav';
import { Description } from '../../components/Description';
import { BottomNav } from '../../components/BottomNav';
import { BigP } from '../../components/BigParagraph';
import { B } from '../../components/Bold';
import { IPageProps } from '../../model/common';
import { getClassName } from '../../utils/getClassName';

const imageClass = getClassName('fade-in', 'fade-out');

export const Civilization = (props: IPageProps) => {
  const { active, visited, slide, onNextClick, onPrevClick, direction } = props;
  return (
    <BookPage active={ active } visited={ visited }>
      <div className="row-grid content-grid">
        <div
          className={`full-screen-image fade-in fade-out`}
          style={ {
            background: `url(${crete2Img})`,
          } }
        />
        <div className={ 'heaven-button top-row' }>
          <img src={ heavenImg } />
        </div>
        <TopNav
          slide={ slide }
          list={ ['Карта', 'Жители Крита', 'Кносский дворец', 'Падение цивилизации'] }
        />
        <div />
      </div>
      <Description
        h2={ 'Карта' }
        h1={ 'Цивилизация' }
        bottomNav={ <BottomNav
          next={ 'Карта' }
          onNext={ onNextClick }
          back={ 'Религия' }
          onBack={ onPrevClick }
          className={ 'slideable' }
        /> }
        className={ 'row-grid' }
      >
        <p>
          Крит — остров, расположенный между Европой и Азией. Омывается тремя морями — <B>Критским</B> на севере, <B>Ливийским</B>
           на юге и <B>Ионическим</B> на западе. 
        </p>
        <p>
          Здесь зародилась первая европейская цивилизация — <B>Крито-минойская</B>. Ее назвали по имени легендарного царя 
          <B>Миноса</B>.
        </p>
        <p>
          Когда до возвышения Афин, Спарты и других известных нам древнегреческих городов оставались сотни, а то и тысячи лет, на 
          острове зародилась культура особого типа. Она соединила элементы <B>восточных и европейских</B> принципов устройства
           общества, на которых и <B>выросла классическая Древняя Греция.</B>
        </p>
      </Description>
    </BookPage>
  );
};
