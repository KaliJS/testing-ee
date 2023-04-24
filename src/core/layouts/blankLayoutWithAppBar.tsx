import { styled, useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import { BlankLayoutWithAppBarProps } from './types';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const StyledLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8),
}));
const BlankLayoutWithAppBarWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  height: '100vh',

  '& .content-center': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(5),
    minHeight: `calc(100vh - ${theme.spacing((theme.mixins.toolbar.minHeight as number) / 4)})`,
  },

  '& .content-right': {
    display: 'flex',
    overflowX: 'hidden',
    position: 'relative',
    minHeight: `calc(100vh - ${theme.spacing((theme.mixins.toolbar.minHeight as number) / 4)})`,
  },
}));

const BlankLayoutWithAppBar = (props: BlankLayoutWithAppBarProps) => {
  const { children } = props;
  const theme = useTheme();

  return (
    <BlankLayoutWithAppBarWrapper>
      <AppBar
        color="default"
        position="sticky"
        elevation={3}
        sx={{
          backgroundColor: 'background.paper',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            p: (theme) => `${theme.spacing(0, 6)} !important`,
            minHeight: `${(theme.mixins.toolbar.minHeight as number) - 0}px !important`,
          }}
        >
          <StyledLink href="/">
            <Typography variant="h6" sx={{ ml: 2, fontWeight: 700, lineHeight: 1.2 }}>
              Expent
            </Typography>
          </StyledLink>
        </Toolbar>
      </AppBar>
      <Box
        className="app-content"
        sx={{
          overflowX: 'hidden',
          position: 'relative',
          minHeight: (theme) =>
            `calc(100vh - ${theme.spacing((theme.mixins.toolbar.minHeight as number) / 4)})`,
        }}
      >
        {children}
      </Box>
    </BlankLayoutWithAppBarWrapper>
  );
};

export default BlankLayoutWithAppBar;
