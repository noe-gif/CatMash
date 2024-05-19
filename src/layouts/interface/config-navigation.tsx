import { useMemo } from 'react';

import { paths } from 'src/routes/paths';

import Iconify from 'src/components/mui/iconify';
import SvgColor from 'src/components/mui/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const customIcon = (name: string) => <Iconify icon={name} />;

const ICONS = {
  mashing: customIcon('mdi:cards'),
  scores: customIcon('solar:ranking-bold-duotone'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const data = useMemo(
    () => [
      {
        subheader: 'Menu',
        items: [
          {
            title: 'Catmash',
            path: paths.mashing,
            icon: ICONS.mashing,
          },
          {
            title: 'Scores',
            path: paths.scores,
            icon: ICONS.scores,
          },
        ],
      },
    ],
    []
  );

  return data;
}
