import { Theme } from '@mui/material/styles';

const Snackbar = (theme: Theme) => {
  return {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: theme.spacing(1.75, 4),
          backgroundColor: theme.palette.grey[900],
          '& .MuiSnackbarContent-message': {
            lineHeight: 1.429,
          },
        },
      },
    },
  };
};

export default Snackbar;
