export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

const typography = () => {
  return {
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    allVariants: {
      fontFamily: 'Manrope',
    },
    h1: {
      fontWeight: 800,
      lineHeight: 80 / 64,
      fontSize: pxToRem(40),
    },
    h2: {
      fontWeight: 800,
      lineHeight: 64 / 48,
      fontSize: pxToRem(32),
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(24),
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(20),
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(18),
    },
    h6: {
      fontWeight: 700,
      lineHeight: 28 / 18,
      fontSize: pxToRem(17),
    },
    title: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(26),
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(20),
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: 22 / 14,
      fontSize: pxToRem(16),
    },
    body1: {
      lineHeight: 1.5,
      fontWeight: 600,
      fontSize: pxToRem(14),
    },
    body2: {
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
    },
    caption: {
      lineHeight: 1.5,
      fontSize: pxToRem(12),
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(12),
    },
    button: {
      fontWeight: 700,
      lineHeight: 24 / 14,
      fontSize: pxToRem(14),
    },
  };
};

export default typography;
