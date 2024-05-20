import { SxProps, Theme } from '@mui/material';

export const cardContainerStyles = 'inter-var';
export const cardBodyStyles = `
  bg-white relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1]
  border-black w-full h-auto rounded-xl p-8 border
`;

export const cardImageStyles: SxProps<Theme> = (theme) => ({
  height: 400,
  width: '100%',
  objectFit: 'cover',
  borderRadius: '12px',
  '&:hover': {
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  },
  [theme.breakpoints.down('sm')]: {
    height: 200,
  },
});

export const cardTitleStyles = `
  text-2xl font-bold text-black mt-4
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const cardTextStyles = `
  text-neutral-500 text-md max-w-md mt-2 text-black
  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;
