import React, { ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
import componentsOverride from './overrides';
import GlobalStyling from './globalStyles';

import { useMemo } from 'react';

import palette from './palette';
import spacing from './spacing';
import shadows from './shadows';
import typography from './typography';

interface Props {
  children: ReactNode;
}

const ThemeComponent = (props: Props) => {
  const { children } = props;
  const themeOptions = useMemo(
    () => ({
      fontFamily: 'Manrope',
      palette: palette(),
      typography: typography(),
      shadows: shadows(),
      ...spacing,
      shape: {
        borderRadius: 10,
      },
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={() => GlobalStyling(theme) as any} />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeComponent;
