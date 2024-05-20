'use client';

import { useContext } from 'react';
import { CatListContext } from './cat-list-context';

// ----------------------------------------------------------------------

export const useCatListContext = () => {
  const context = useContext(CatListContext);

  if (!context) throw new Error('useAuthContext context must be use inside AuthProvider');

  return context;
};
