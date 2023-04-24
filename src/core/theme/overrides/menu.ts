import { Theme } from '@mui/material/styles';

const Menu = (theme: Theme) => {
  const boxShadow = () => {
    return theme.shadows[8];
  };

  return {
    MuiMenu: {
      styleOverrides: {
        root: {
          '& .MuiMenu-paper': {
            borderRadius: 5,
            boxShadow: boxShadow(),
          },
        },
        list: {
          paddingTop: theme.spacing(0.5),
          paddingBottom: theme.spacing(0.5),
        },
      },
    },
  };
};

export default Menu;
