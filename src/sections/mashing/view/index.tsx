'use client';

// ----------------------------------------------------------------------

import { Box, Divider, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MashCard } from '../components/card';
import {
  boxStyles,
  cardContainerStyles,
  dividerStyles,
  mainWrapperStyle,
  subtitleStyle,
  titleWrapperStyle,
} from './style';

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

const CatMashCat = ({ isSmallScreen }: { isSmallScreen: boolean }) => {
  return (
    <Box sx={boxStyles(isSmallScreen)}>
      <MashCard />
    </Box>
  );
};
export default function MashingView() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={mainWrapperStyle}>
      <MashingTitle />
      <Box sx={cardContainerStyles(isSmallScreen)}>
        <CatMashCat isSmallScreen={isSmallScreen} />
        <Divider
          orientation={isSmallScreen ? 'horizontal' : 'vertical'}
          flexItem
          sx={dividerStyles(isSmallScreen)}
        />
        <CatMashCat isSmallScreen={isSmallScreen} />
      </Box>
    </Box>
  );
}
