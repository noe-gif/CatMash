'use client';

import { useMemo, useReducer, useCallback, useEffect } from 'react';
import { ActionMapType, CatListStateType, cat } from './types';
import { changeCatListMethod } from './methods/change-cat-list';
import { CatListContext } from './cat-list-context';

// ----------------------------------------------------------------------

export enum Types {
  CAT_LIST = 'CAT_LIST',
}

export type Payload = {
  [Types.CAT_LIST]: {
    catList: cat[];
  };
};

export type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

// ----------------------------------------------------------------------

const initialState: CatListStateType = {
  catList: [],
};

const reducer = (state: CatListStateType, action: ActionsType) => {
  if (action.type === Types.CAT_LIST) {
    return {
      ...state,
      catList: action.payload.catList,
    };
  }
  return state;
};

type Props = {
  children: React.ReactNode;
};

export function CatListContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeCatList = useCallback((catList: cat[]) => {
    changeCatListMethod({ dispatch, catList });
  }, []);

  const getCatList = () => {
    return state.catList;
  };

  // ----------------------------------------------------------------------

  const memoizedValue = useMemo(
    () => ({
      catList: state.catList,
      getCatList,
      changeCatList,
    }),
    [getCatList, changeCatList]
  );

  return <CatListContext.Provider value={memoizedValue}>{children}</CatListContext.Provider>;
}
