import { useCatListContext } from 'src/context/use-platform-context';
import { useEffect, useState } from 'react';
import { cat } from 'src/context/types';
import fetchCats from 'src/api/cat-list';

const ScoreViewHooks = () => {
  const { getCatList } = useCatListContext();
  const [catList, setCatList] = useState<cat[]>(getCatList());

  useEffect(() => {
    fetchCats()
      .then((cats) => {
        if (getCatList().length > 0) return;
        setCatList(cats);
      })
      .catch((error) => {
        console.error('Failed to fetch cats:', error);
      });
  }, []);

  return { catList };
};

export default ScoreViewHooks;
