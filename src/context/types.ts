// ----------------------------------------------------------------------

export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export interface cat {
  id: string;
  url: string;
  name: string;
  score: number;
}

export type CatListStateType = {
  catList: cat[];
};

export type CatListContextType = {
  catList: cat[];
  getCatList: () => cat[];
  changeCatList: (catList: cat[]) => void;
};
