import { Dispatch } from 'react';
import { ActionsType, Types } from '..';
import { cat } from '../types';

type changecatListMethodProps = {
  dispatch: Dispatch<ActionsType>;
  catList: cat[];
};

export const changeCatListMethod = ({ dispatch, catList }: changecatListMethodProps) => {
  try {
    dispatch({
      type: Types.CAT_LIST,
      payload: {
        catList: catList,
      },
    });
  } catch (error) {
    throw error;
  }
};
