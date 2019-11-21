// @flow
import { dirs } from '../model/common';
import fp from 'lodash/fp';
export const getClassName = fp.curry(
  (classIn: string, classOut: string, direction: $Values<typeof dirs>) =>
    direction === dirs.fwd ? classIn : classOut
);