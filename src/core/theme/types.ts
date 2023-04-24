declare module '@mui/material/styles' {
  interface Palette {
    commonColor: {
      dark: string;
      main: string;
      white: string;
      light: string;
      black: string;
      toast: string;
      shadow: string;
      tooltipBg: string;
      iconBg: string;
      tableHeaderBg: string;
    };
  }
  interface PaletteOptions {
    commonColor?: {
      dark?: string;
      main?: string;
      white?: string;
      light?: string;
      black?: string;
      toast?: string;
      shadow?: string;
      tooltipBg?: string;
      iconBg?: string;
      tableHeaderBg?: string;
    };
  }
  interface PaletteColor {
    lighter?: string;
  }
}

export {};
