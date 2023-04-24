import { Theme } from '@mui/material/styles';
export default function Breadcrumbs(theme: Theme) {
  return {
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          a: {
            color: theme.palette.secondary.light,
            fontSize: theme.typography.pxToRem(14),
            fontWeight: 500,
            textDecoration: 'unset',
            display: 'flex',
            '&:hover': {
              color: theme.palette.secondary.dark,
            },
          },
        },
        separator: {
          marginLeft: theme.spacing(0.5),
          marginRight: theme.spacing(0.5),
        },
      },
    },
  };
}
