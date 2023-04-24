import { Theme } from '@mui/material/styles';

const Backdrop = (theme: Theme) => {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: `rgba(${theme.palette.commonColor.main}, 0.5)`,
        },
        invisible: {
          backgroundColor: 'transparent',
        },
      },
    },
  };
};

export default Backdrop;
