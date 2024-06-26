'use client';

// ----------------------------------------------------------------------

import { Box, Typography } from '@mui/material';
import { subtitleStyle, titleWrapperStyle } from './style';
import ItemListHorizontal from 'src/components/mui/score-list/item-list-horizontal';
import ScoreViewHooks from 'src/hooks/section/score/view';

const ScoreTitle = () => {
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

const ScoreView = () => {
  const { catList } = ScoreViewHooks();
  return (
    <>
      <ScoreTitle />
      <ItemListHorizontal items={catList} />
    </>
  );
};

export default ScoreView;
