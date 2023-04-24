import { Theme } from '@mui/material/styles';

import { hexToRGBA } from 'core/utils/hex-to-rgba';

const Pagination = (theme: Theme) => {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        outlined: {
          borderColor: `rgba(${theme.palette.commonColor.main}, 0.22)`,
        },
        outlinedPrimary: {
          '&.Mui-selected': {
            backgroundColor: hexToRGBA(theme.palette.primary.main, 0.12),
            '&:hover': {
              backgroundColor: `${hexToRGBA(theme.palette.primary.main, 0.24)} !important`,
            },
          },
        },
        outlinedSecondary: {
          '&.Mui-selected': {
            backgroundColor: hexToRGBA(theme.palette.secondary.light, 0.12),
            '&:hover': {
              backgroundColor: `${hexToRGBA(theme.palette.secondary.light, 0.24)} !important`,
            },
          },
        },
        rounded: {
          borderRadius: 8,
        },
      },
    },
  };
};

export default Pagination;
