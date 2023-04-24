import Fab from '@mui/material/Fab';
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import { useTheme } from '@mui/material';
import { LayoutProps } from 'core/layouts/types';
import ScrollToTop from 'core/components/scroll-to-top';
import Header from './header';
import Icon from 'core/components/icon';

const LayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex',
});

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
});

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(4, 6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const Layout = (props: LayoutProps) => {
  const { children, scrollToTop } = props;
  const theme = useTheme();

  return (
    <LayoutWrapper className="layout-wrapper">
      <MainContentWrapper className="layout-content-wrapper">
        <Header />
        <ContentWrapper
          className="layout-page-content"
          sx={{
            mx: 'auto',
          }}
        >
          {children}
        </ContentWrapper>

        {scrollToTop ? (
          scrollToTop(props)
        ) : (
          <ScrollToTop className="mui-fixed">
            <Fab color="primary" size="small" aria-label="scroll back to top">
              <Icon icon="up" color={theme.palette.secondary.main} height={22} />
            </Fab>
          </ScrollToTop>
        )}
      </MainContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
