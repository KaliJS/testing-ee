import { Theme } from '@mui/material/styles';

export default function MenuItem(theme: Theme) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1),
        },
      },
    },
  };
}
