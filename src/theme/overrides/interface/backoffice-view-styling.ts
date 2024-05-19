import { tabsClasses } from '@mui/material/Tabs';

const tabsStyling = {
  width: 1,
  pb: 2,
  textTransform: 'uppercase',
  [`& .${tabsClasses.flexContainer}`]: {
    pr: { md: 3 },
    justifyContent: {
      sm: 'center',
      md: 'flex-start',
    },
  },
};

export const containerStyle = {
  padding: 20,
  paddingTop: 0,
  overflow: 'hidden',
};

export const customBreadcrumbsStyle = {
  mb: { xs: 3, md: 2 },
};

export default tabsStyling;
