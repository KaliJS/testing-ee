import { Theme } from '@mui/material/styles';

const Accordion = (theme: Theme) => {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: theme.shadows[1],
          '&:first-of-type': {
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          },
          '&:last-of-type': {
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          },
          '&.Mui-disabled': {
            backgroundColor: `rgba(${theme.palette.commonColor.main}, 0.12)`,
          },
          '&.Mui-expanded': {
            boxShadow: theme.shadows[3],
            '&:not(:first-of-type)': { borderTop: `1px solid ${theme.palette.divider}` },
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: 50,
          borderRadius: 'inherit',
          padding: `0 ${theme.spacing(5)}`,
          '&.Mui-expanded': {
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          },
          '& + .MuiCollapse-root': {
            '& .MuiAccordionDetails-root:first-child': {
              paddingTop: 0,
            },
          },
        },
        content: {
          margin: `${theme.spacing(2.5)} 0`,
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: theme.spacing(5),
          '& + .MuiAccordionDetails-root': {
            paddingTop: 0,
          },
        },
      },
    },
  };
};

export default Accordion;
