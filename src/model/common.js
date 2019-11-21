// @flow
export interface IPageProps {
  onNextClick: Function;
  onPrevClick: Function;
  slide: number;
  active: boolean;
  visited: boolean;
  direction: $Values<typeof dirs>;
}

export const dirs = {
  fwd: 'forward',
  bck: 'backward'
}
