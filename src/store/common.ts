import { Dispatch } from 'redux';

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

export interface ReduxType {
  getState: any;
  dispatch: Dispatch<any>;
}
