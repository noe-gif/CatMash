import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import fetchCats from 'src/api/cat-list';
import { useCatListContext } from 'src/context/use-platform-context';
import { useEffect, useState } from 'react';
import { cat } from 'src/context/types';
export const MashingViewHooks = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { catList, changeCatList, getCatList } = useCatListContext();

  const [leftCardCat, setLeftCardCat] = useState<cat | null>(null);
  const [rightCardCat, setRightCardCat] = useState<cat | null>(null);

  const getRandomCat = (catList: cat[], excludedCat?: cat | null): cat => {
    let newCat: cat;
    do {
      newCat = catList[Math.floor(Math.random() * catList.length)];
    } while (excludedCat && newCat.id === excludedCat.id);
    return newCat;
  };

  useEffect(() => {
    fetchCats()
      .then((cats) => {
        changeCatList(cats);
        const initialLeftCat = getRandomCat(cats);
        const initialRightCat = getRandomCat(cats, initialLeftCat);
        setLeftCardCat(initialLeftCat);
        setRightCardCat(initialRightCat);
      })
      .catch((error) => {
        console.error('Failed to fetch cats:', error);
      });
  }, []);

  const updateCatScore = (clickedCat: cat): cat | null => {
    let foundCat: cat | null = null;

    const updatedCatList = catList.map((cat) => {
      if (cat.id === clickedCat.id) {
        foundCat = { ...cat, score: cat.score + 1 };
        return { ...cat, score: cat.score + 1 };
      } else {
        return cat;
      }
    });
    changeCatList(updatedCatList);
    return foundCat ? foundCat : null;
  };

  const onLeftCardClick = () => {
    if (leftCardCat) {
      const newRightCardCat = getRandomCat(getCatList(), leftCardCat);
      const updatedCat = updateCatScore(leftCardCat);
      setLeftCardCat(updatedCat ? updatedCat : leftCardCat);
      setRightCardCat(newRightCardCat);
    }
  };

  const onRightCardClick = () => {
    if (rightCardCat) {
      const newLeftCardCat = getRandomCat(getCatList(), rightCardCat);
      const updatedCat = updateCatScore(rightCardCat);
      setRightCardCat(updatedCat ? updatedCat : rightCardCat);
      setLeftCardCat(newLeftCardCat);
    }
  };

  return {
    leftCardCat,
    rightCardCat,
    isSmallScreen,
    onLeftCardClick,
    onRightCardClick,
  };
};
