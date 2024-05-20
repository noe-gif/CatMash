'use client';

import { createContext } from 'react';
import { CatListContextType } from './types';

// ----------------------------------------------------------------------

export const CatListContext = createContext({} as CatListContextType);
