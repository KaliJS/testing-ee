import Link from 'next/link';
import MUIBreadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import Icon from '../icon';

interface Crumb {
  href?: string;
  label: string;
}

interface Props {
  crumbs: Crumb[];
}

const Breadcrumbs = ({ crumbs }: Props) => {
  const theme = useTheme();

  return (
    <MUIBreadcrumbs
      separator={<Icon icon="right" width={13} height={20} color={theme.palette.secondary.light} />}
      aria-label="breadcrumb"
    >
      <Link href={'/app'}>
        <Icon icon="home" width={16} height={16} color={theme.palette.secondary.light} />
      </Link>
      {crumbs.map((crumb, i) => {
        if (crumb.href) {
          return (
            <Link key={i} href={crumb.href}>
              {crumb.label}
            </Link>
          );
        } else {
          return (
            <Box key={i} sx={{ color: theme.palette.commonColor.dark }}>
              {crumb.label}
            </Box>
          );
        }
      })}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
