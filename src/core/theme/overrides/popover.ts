import { Theme } from '@mui/material/styles';

const Popover = (theme: Theme) => {
  return {
    MuiPopover: {
      styleOverrides: {
        root: {
          '& .MuiPopover-paper': {
            boxShadow: theme.shadows[10],
            borderRadius: theme.spacing(1.25),
          },
        },
      },
    },
  };
};

export default Popover;
