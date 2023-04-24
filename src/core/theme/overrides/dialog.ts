import { Theme } from '@mui/material/styles';

const Dialog = (theme: Theme) => {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: theme.shadows[10],
          '&:not(.MuiDialog-paperFullScreen)': {},
          '& > .MuiList-root': {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5),
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5),
          '& + .MuiDialogContent-root': {
            paddingTop: 0,
          },
          '& + .MuiDialogActions-root': {
            paddingTop: 0,
          },
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5),
          '&.dialog-actions-dense': {
            padding: theme.spacing(2.5),
            paddingTop: 0,
          },
        },
      },
    },
  };
};

export default Dialog;
