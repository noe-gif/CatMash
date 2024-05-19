export const mainWrapperStyle = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
};

export const titleWrapperStyle = {
  ml: 5,
  textAlign: 'left',
};

export const subtitleStyle = {
  color: '#b8b8b8',
};

export const cardContainerStyles = (isSmallScreen: boolean) => ({
  display: 'flex',
  flexDirection: isSmallScreen ? 'column' : 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: isSmallScreen ? '100vh' : '80vh',
  width: '100%',
  alignSelf: 'center',
  gap: isSmallScreen ? '5px' : '9%',
  mt: isSmallScreen ? 30 : 0,
});

export const boxStyles = (isSmallScreen: boolean) => ({
  height: isSmallScreen ? '75vh' : '60%',
  width: isSmallScreen ? '70%' : '30%',
  minWidth: 400,
  borderRadius: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const dividerStyles = (isSmallScreen: boolean) => ({
  marginTop: isSmallScreen ? '5%' : 0,
  width: isSmallScreen ? '70%' : 'auto',
  height: isSmallScreen ? 'auto' : '75%',
  alignSelf: 'center',
});
