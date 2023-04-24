import { Theme } from '@mui/material/styles';

const Autocomplete = (theme: Theme) => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '.MuiOutlinedInput-root': {
            paddingLeft: theme.spacing(1.75),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
          },
          '.MuiOutlinedInput-root.MuiInputBase-sizeSmall': {
            paddingLeft: theme.spacing(1.15),
          },
          '.MuiAutocomplete-input': {
            padding: theme.spacing(0.5),
          },
        },
        paper: {
          boxShadow: theme.shadows[10],
          borderRadius: theme.spacing(1.25),
        },
        endAdornment: {
          top: 'unset',
        },
        listbox: {
          padding: theme.spacing(0.5, 0),
        },
        option: {
          fontWeight: 500,
          fontSize: theme.typography.pxToRem(14),
          padding: `${theme.spacing(1.2, 2)} !important`,
        },
      },
    },
  };
};

export default Autocomplete;
