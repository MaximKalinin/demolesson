// @flow
import React from 'react';
import styled from 'styled-components';
import { BookPage } from '../../layout/BookPage';
import heavenImg from '../../../img/heaven.svg';
import crete1Img from '../../../img/crete-map-1.svg';
import { TopNav } from '../../components/TopNav';
import { Description } from '../../components/Description';
import { BottomNav } from '../../components/BottomNav';
import { BigP } from '../../components/BigParagraph';
import { B } from '../../components/Bold';
import { IPageProps } from '../../model/common';

export const Introduction = (props: IPageProps) => {
  const { active, visited, slide, onNextClick } = props;
  return (
    <BookPage active={ active } visited={ visited }>
      <div className="row-grid content-grid">
        <div
          className="full-screen-image"
          style={ {
            background: `url(${crete1Img})`,
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '50px'
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
        h1={ 'Введение' }
        bottomNav={ <BottomNav
          next={ 'Карта' }
          onNext={ onNextClick }
          back={ 'Религия' }
          className={ 'slideable' }
        /> }
        className={ 'row-grid' }
      >
        <BigP>
          <B>Смотри, Макс</B>
        </BigP>
        <p>
          В последний раз, когда мы виделись, ты решил <B>убрать с Олимпа Аида.</B> Мы прислушались к тебе, и теперь нам не хватает
          одного бога. Хорошие новости в том, что ты можешь им стать. Только не спеши. Как и Гераклу, тебе предстоит совершить ряд
          подвигов, чтобы <B>набраться знаний и проявить свои способности.</B>
        </p>
        <p>
          И вот первое испытание: <B>добудь</B> для меня <B>древнее пророчество</B> о цивилизации Крита. Ты ведь знаешь, где это?
        </p>
      </Description>
    </BookPage>
  );
};
