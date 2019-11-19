import React from 'react';
import styled from 'styled-components';
import fp from 'lodash/fp';

export const RightDescription = (props) => {
  const { children, className } = props;
  return (
    <RightDescriptionEl className={ className }>
      { children }
    </RightDescriptionEl>
  );
}
