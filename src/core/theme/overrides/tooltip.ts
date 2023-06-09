import { Theme } from '@mui/material/styles';

import { hexToRGBA } from 'core/utils/hex-to-rgba';

const Tooltip = (theme: Theme) => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 6,
          lineHeight: 1.455,
          backgroundColor: hexToRGBA(theme.palette.commonColor.tooltipBg, 0.9),
        },
        arrow: {
          color: hexToRGBA(theme.palette.commonColor.tooltipBg, 0.9),
        },
      },
    },
  };
};

export default Tooltip;
