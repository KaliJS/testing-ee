import { Theme } from '@mui/material/styles';

import { hexToRGBA } from 'core/utils/hex-to-rgba';

const Button = (theme: Theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          borderRadius: theme.spacing(1),
          height: 36,
          textTransform: 'unset',
          fontWeight: 600,
          '&.MuiButton-textPrimary:hover': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08),
          },
          '&.MuiButton-textSecondary:hover': {
            backgroundColor: hexToRGBA(theme.palette.secondary.light, 0.08),
          },
          '&.MuiButton-textSuccess:hover': {
            backgroundColor: hexToRGBA(theme.palette.success.main, 0.08),
          },
          '&.MuiButton-textError:hover': {
            backgroundColor: hexToRGBA(theme.palette.error.main, 0.08),
          },
          '&.MuiButton-textWarning:hover': {
            backgroundColor: hexToRGBA(theme.palette.warning.main, 0.08),
          },
          '&.MuiButton-textInfo:hover': {
            backgroundColor: hexToRGBA(theme.palette.info.main, 0.08),
          },
        },
        contained: {
          boxShadow: theme.shadows[3],
          '&.MuiButton-containedPrimary:hover': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.8),
          },
          '&.MuiButton-containedSecondary:hover': {
            backgroundColor: hexToRGBA(theme.palette.secondary.light, 0.8),
          },
          '&.MuiButton-containedSuccess:hover': {
            backgroundColor: hexToRGBA(theme.palette.success.main, 0.8),
          },
          '&.MuiButton-containedError:hover': {
            backgroundColor: hexToRGBA(theme.palette.error.main, 0.8),
          },
          '&.MuiButton-containedWarning:hover': {
            backgroundColor: hexToRGBA(theme.palette.warning.main, 0.8),
          },
          '&.MuiButton-containedInfo:hover': {
            backgroundColor: hexToRGBA(theme.palette.info.main, 0.8),
          },
        },
        containedPrimary: {
          '&.Mui-disabled': {
            backgroundColor: theme.palette.primary.light,
          },
        },
        outlined: {
          lineHeight: 1.572,
          '&.MuiButton-outlinedPrimary:hover': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08),
          },
          '&.MuiButton-outlinedSecondary:hover': {
            backgroundColor: hexToRGBA(theme.palette.secondary.light, 0.08),
          },
          '&.MuiButton-outlinedSuccess:hover': {
            backgroundColor: hexToRGBA(theme.palette.success.main, 0.08),
          },
          '&.MuiButton-outlinedError:hover': {
            backgroundColor: hexToRGBA(theme.palette.error.main, 0.08),
          },
          '&.MuiButton-outlinedWarning:hover': {
            backgroundColor: hexToRGBA(theme.palette.warning.main, 0.08),
          },
          '&.MuiButton-outlinedInfo:hover': {
            backgroundColor: hexToRGBA(theme.palette.info.main, 0.08),
          },
        },
        sizeIcon: {
          marginRight: theme.spacing(0.25),
        },
        sizeSmall: {
          height: 30,
          borderRadius: theme.spacing(1),
        },
        sizeLarge: {
          height: 44,
          borderRadius: theme.spacing(1.25),
        },
      },
    },
  };
};

export default Button;
