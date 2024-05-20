import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import { useResponsive } from 'src/hooks/use-responsive';

import { cat } from 'src/context/types';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  item: cat;
};

export default function ItemHorizontal({ item }: Props) {
  const smUp = useResponsive('up', 'sm');

  const { id, name, url, score } = item;

  return (
    <>
      <Stack component={Card} direction="row">
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Stack spacing={1} flexGrow={1} sx={{ p: 2 }}>
            <Typography variant="subtitle2" sx={{ fontSize: 25, fontWeight: '700' }}>
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 18 }}>
              score: {score}
            </Typography>
          </Stack>

          <Box
            sx={{
              width: 180,
              height: 240,
              position: 'relative',
              flexShrink: 0,
              p: 1,
            }}
          >
            <Box component="img" alt={id} src={url} sx={{ height: 1, borderRadius: 1.5 }} />
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
