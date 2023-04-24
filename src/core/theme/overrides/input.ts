import { Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const input = (theme: Theme) => {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            opacity: 0.5,
            '& svg': { color: theme.palette.text.disabled },
          },
        },
        input: {
          '&::placeholder': {
            opacity: 1,
            color: theme.palette.secondary.main,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.grey[500], 0.12),
          '&:hover': {
            backgroundColor: alpha(theme.palette.grey[500], 0.16),
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        underline: {
          '&:before': {
            borderBottomColor: alpha(theme.palette.grey[500], 0.56),
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '12px',
          caretColor: theme.palette.primary.main,
        },
        notchedOutline: {
          border: `1px solid ${theme.palette.secondary.lighter}`,
        },
        root: {
          fontWeight: 500,
          borderRadius: theme.spacing(1.25),
          fontSize: theme.typography.pxToRem(14),
          backgroundColor: theme.palette.commonColor.light,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            border: `1px solid ${theme.palette.secondary.lighter}`,
            boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
          },
          '&.Mui-focused': {
            boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
            '& .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${theme.palette.primary.main}`,
            },
          },
          '&.Mui-error': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${theme.palette.error.light}`,
              boxShadow: `0 0 0 2px ${theme.palette.error.light}`,
            },
            '&.Mui-focused': {
              boxShadow: `0 0 0 2px ${theme.palette.error.light}`,
              '& .MuiOutlinedInput-notchedOutline': {
                border: `1px solid ${theme.palette.error.main}`,
              },
            },
          },
          '&.Mui-success': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${theme.palette.success.lighter}`,
              boxShadow: `0 0 0 2px ${theme.palette.success.lighter}`,
            },
            '&.Mui-focused': {
              boxShadow: `0 0 0 2px ${theme.palette.success.lighter}`,
              '& .MuiOutlinedInput-notchedOutline': {
                border: `1px solid ${theme.palette.error.main}`,
              },
            },
          },
        },
        inputSizeSmall: {
          padding: '8px 12px',
        },
        sizeSmall: {
          borderRadius: theme.spacing(1),
        },
        inputMultiline: {
          padding: 0,
        },
      },
    },
  };
};

export default input;
