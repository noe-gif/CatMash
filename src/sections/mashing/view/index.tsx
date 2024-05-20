'use client';

// ----------------------------------------------------------------------

import { Box, Divider, Typography, useMediaQuery } from '@mui/material';
import { MashCard } from '../components/card';
import {
  boxStyles,
  cardContainerStyles,
  dividerStyles,
  mainWrapperStyle,
  subtitleStyle,
  titleWrapperStyle,
} from './style';
import { MashingViewHooks } from 'src/hooks/section/mashing/view';
import { cat } from 'src/context/types';

type MashCatCardWrapperProps = {
  cat: cat | null;
  isSmallScreen: boolean;
  onClick: () => void;
};

const MashingTitle = () => {
  return (
    <Box sx={titleWrapperStyle}>
      <Typography variant="h2" component="h1">
        Cat Mashing 🐈
      </Typography>
      <Typography variant="subtitle1" component="h2" sx={subtitleStyle}>
        Select the most beautiful cat from the options below.
      </Typography>
    </Box>
  );
};

const MashCatCardWrapper = ({ cat, isSmallScreen, onClick }: MashCatCardWrapperProps) => {
  return (
    <Box sx={boxStyles(isSmallScreen)} onClick={onClick}>
      <MashCard cat={cat} />
    </Box>
  );
};

export default function MashingView() {
  const { rightCardCat, leftCardCat, isSmallScreen, onLeftCardClick, onRightCardClick } =
    MashingViewHooks();

  return (
    <Box sx={mainWrapperStyle}>
      <MashingTitle />
      <Box sx={cardContainerStyles(isSmallScreen)}>
        <MashCatCardWrapper
          cat={leftCardCat}
          isSmallScreen={isSmallScreen}
          onClick={onLeftCardClick}
        />
        <Divider
          orientation={isSmallScreen ? 'horizontal' : 'vertical'}
          flexItem
          sx={dividerStyles(isSmallScreen)}
        />
        <MashCatCardWrapper
          cat={rightCardCat}
          isSmallScreen={isSmallScreen}
          onClick={onRightCardClick}
        />
      </Box>
    </Box>
  );
}
