import { alpha } from '@mui/material/styles';

const DefaultPalette = () => {
  const whiteColor = '#FFF';
  const lightColor = '#003b4d0d'; // rgba(0, 59, 77, 0.05)
  const darkColor = '#003B4D'; //rgba(0, 59, 77, 1)
  const blackColor = '#000';

  const GREY = {
    50: '#F2F2F2',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161C24',
    A100: '#F5F5F5',
    A200: '#EEEEEE',
    A400: '#BDBDBD',
    A700: '#616161',
  };

  //theme blue color
  const PRIMARY = {
    lighter: '#17bebb1a', //rgba(23, 190, 187, 0.1)
    light: '#17bebb40', //rgba(23, 190, 187, 0.25)
    main: '#17BEBB', //rgba(23, 190, 187, 1)
    dark: '#0B5B5A', //rgba(11, 91, 90, 1)
    contrastText: '#003B4D',
  };

  //theme dark color
  const SECONDARY = {
    lighter: '#003b4d26', //rgba(0, 59, 77, 0.15)
    light: '#003b4d59', //rgba(0, 59, 77, 0.35)
    main: '#003b4d99', //rgba(0, 59, 77, 0.6)
    dark: '#003B4D', //rgba(0, 59, 77, 1)
    contrastText: whiteColor,
  };

  //theme purple color
  const INFO = {
    lighter: '#907dce1a', //rgba(144, 125, 206, 0.1)
    light: '#907dce40', //rgba(144, 125, 206, 0.25)
    main: '#907DCE', //rgba(144, 125, 206, 1)
    dark: '#30235D', //rgba(48, 35, 93, 1)
    contrastText: whiteColor,
  };

  //theme green color
  const SUCCESS = {
    lighter: '#90a9551a', //rgba(144, 169, 85, 0.1)
    light: '#90a95540', //rgba(58, 68, 34, 1)
    main: '#90A955', //rgba(144, 169, 85, 1)
    dark: '#3A4422', //rgba(75, 41, 1, 1)
    contrastText: whiteColor,
  };

  //theme orange color
  const WARNING = {
    lighter: '#fcaf581a', //rgba(252, 175, 88, 0.1)
    light: '#fcaf5840', //rgba(252, 175, 88, 0.25)
    main: '#fcaf58', //rgba(252, 175, 88, 1)
    dark: '#4b2901', //rgba(75, 41, 1, 1)
    contrastText: whiteColor,
  };

  //theme red color
  const ERROR = {
    lighter: '#ff80821a', //rgba(255, 128, 130, 0.1)
    light: '#ff808240', //rgba(255, 128, 130, 0.25)
    main: '#FF8082', //rgba(255, 128, 130, 1)
    dark: '#4D0002', //rgba(77, 0, 2, 1)
    contrastText: whiteColor,
  };

  return {
    commonColor: {
      dark: darkColor,
      main: darkColor,
      white: whiteColor,
      light: lightColor,
      black: blackColor,
      toast: PRIMARY.dark,
      shadow: '#003b4d29',
      tooltipBg: PRIMARY.dark,
      tableHeaderBg: lightColor,
      iconBg: '#265868',
    },
    primary: PRIMARY,
    secondary: SECONDARY,
    error: ERROR,
    warning: WARNING,
    info: INFO,
    success: SUCCESS,
    grey: GREY,
    text: {
      primary: darkColor,
      secondary: '#003b4d99',
      disabled: '#003b4d59',
    },
    divider: lightColor,
    background: {
      paper: whiteColor,
      default: whiteColor,
    },
    action: {
      active: GREY[600],
      hover: alpha(GREY[500], 0.08),
      selected: alpha(GREY[500], 0.16),
      disabled: alpha(GREY[500], 0.8),
      disabledBackground: alpha(GREY[500], 0.24),
      focus: alpha(GREY[500], 0.24),
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
  };
};

export default DefaultPalette;
