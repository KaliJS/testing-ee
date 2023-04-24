import { Theme } from '@mui/material/styles';
import { hexToRGBA } from 'core/utils/hex-to-rgba';

const Button = (theme: Theme) => {
  return {
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[5],
          '&:hover': {
            '&.MuiFab-primary:hover': {
              backgroundColor: hexToRGBA(theme.palette.primary.main, 0.8),
            },
            '&.MuiFab-secondary:hover': {
              backgroundColor: hexToRGBA(theme.palette.secondary.light, 0.8),
            },
            '&.MuiFab-success:hover': {
              backgroundColor: hexToRGBA(theme.palette.success.main, 0.8),
            },
            '&.MuiFab-error:hover': {
              backgroundColor: hexToRGBA(theme.palette.error.main, 0.8),
            },
            '&.MuiFab-warning:hover': {
              backgroundColor: hexToRGBA(theme.palette.warning.main, 0.8),
            },
            '&.MuiFab-info:hover': {
              backgroundColor: hexToRGBA(theme.palette.info.main, 0.8),
            },
          },
        },
      },
    },
  };
};

export default Button;
