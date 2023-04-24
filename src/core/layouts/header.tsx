import React, { useState, MouseEvent } from 'react';
import { useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { imagesPath } from 'core/configs/paths';

const handleURLQueries = (router: NextRouter, path: string | undefined): boolean => {
  if (Object.keys(router.query).length && path) {
    const arr = Object.keys(router.query);
    return (
      router.asPath.includes(path) &&
      router.asPath.includes(router.query[arr[0]] as string) &&
      path !== '/'
    );
  }
  return false;
};

const HeaderContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: theme.spacing(10.5),
  minHeight: theme.spacing(10.5),
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 7.75),
  backgroundColor: theme.palette.commonColor.dark,
}));

const LogoTextWrap = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
}));

const ExpentText = styled('div')(({ theme }) => ({
  fontWeight: 600,
  fontSize: theme.typography.pxToRem(22),
  lineHeight: '140%',
  color: theme.palette.commonColor.white,
}));

const UserInfoIconWrap = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginLeft: 'auto',
  img: {
    cursor: 'pointer',
  },
}));

const IconsWrap = styled('div')(({ theme }) => ({
  width: theme.spacing(5.5),
  height: theme.spacing(5.5),
  minWidth: theme.spacing(5.5),
  background: theme.palette.commonColor.iconBg,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}));

const NavigationWrap = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  marginLeft: theme.spacing(12.1),
}));

const UserIconsWrap = styled('div')(({ theme }) => ({
  background: theme.palette.commonColor.white,
  width: theme.spacing(5.5),
  minWidth: theme.spacing(5.5),
  height: theme.spacing(5.5),
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const UserWrap = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  cursor: 'pointer',
}));

const UserText = styled('div')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(14),
  lineHeight: '140%',
  color: theme.palette.commonColor.white,
  fontWeight: 600,
}));

const ActiveBorderBottom = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: -3,
  left: '50%',
  width: '60%',
  borderBottom: `4px solid ${theme.palette.primary.main}`,
  transform: 'translate(-50%, -50%)',
}));

const NavText = styled('div')(({ theme }) => ({
  width: 'fit-content',
  height: '100%',
  padding: theme.spacing(0, 2.5),
  fontSize: theme.typography.pxToRem(14),
  lineSeight: '140%',
  color: theme.palette.commonColor.white,
  opacity: '0.6',
  cursor: 'pointer',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  letterSpacing: '0.07em',
  '&:hover': {
    background: 'linear-gradient(180deg, rgba(0, 39, 51, 0) 0%, #002733 100%)',
  },
}));

interface NavItems {
  text: string;
  path: string;
}

const navItems: NavItems[] = [
  {
    text: 'Home',
    path: '/app',
  },
  {
    text: 'Dashboard',
    path: '/dashboard',
  },
  {
    text: 'Vendors',
    path: '/vendor',
  },
  {
    text: 'Projects',
    path: '/projects',
  },
  {
    text: 'Configurations',
    path: '/configurations',
  },
];

const Header: React.FC = () => {
  const theme = useTheme();
  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = useState<Element | null>(null);

  const isNavLinkActive = (item: NavItems) => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true;
    } else {
      return false;
    }
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <HeaderContainer>
      <LogoTextWrap>
        <Image src={`${imagesPath}/expent-logo.svg`} alt="logo" width={20} height={40} />
        <ExpentText>Expent</ExpentText>
      </LogoTextWrap>

      <NavigationWrap>
        {navItems.map((item, i) => {
          return (
            <NavText
              key={i}
              onClick={() => {
                router.push(item.path);
              }}
              sx={{
                background: isNavLinkActive(item)
                  ? 'linear-gradient(180deg, rgba(0, 39, 51, 0) 0%, #002733 100%)'
                  : 'transparent',
                opacity: isNavLinkActive(item) ? 1 : 0.6,
              }}
            >
              {item.text}
              {isNavLinkActive(item) && <ActiveBorderBottom />}
            </NavText>
          );
        })}
      </NavigationWrap>

      <UserInfoIconWrap>
        <IconsWrap>
          <Image src={`${imagesPath}/bookmark.svg`} alt="bookmark" width={14} height={18} />
        </IconsWrap>
        <IconsWrap>
          <Image src={`${imagesPath}/notification.svg`} alt="notification" width={16} height={20} />
        </IconsWrap>

        <UserWrap onClick={handleOpenUserMenu}>
          <UserIconsWrap>
            <Image src={`${imagesPath}/user-icon.svg`} alt="user" width={20} height={20} />
          </UserIconsWrap>
          <UserText>Smith Jones</UserText>
          <Image src={`${imagesPath}/down-arrow.svg`} alt="arrow" width={14} height={14} />
        </UserWrap>
      </UserInfoIconWrap>
      <Menu
        sx={{ mt: '40px', width: theme.spacing(15) }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {['Profile', 'Settings', 'Logout'].map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
