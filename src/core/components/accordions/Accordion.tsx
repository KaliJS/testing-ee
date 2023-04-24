import React, { ReactNode } from 'react';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { IconButton, Typography } from '@mui/material';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: `${theme.palette.commonColor.light} !important`,
  color: `${theme.palette.commonColor.dark} !important`,
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<KeyboardArrowRightIcon />} {...props} />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  margin: theme.spacing(2),
  marginRight: 0,
  paddingRight: '0 !important',
}));

export interface AccordionComponentProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  onIconClick?: () => void;
  disabled?: boolean;
}

function AccordionComponent(props: AccordionComponentProps) {
  const { title, icon, children, onIconClick, disabled = false } = props;

  return (
    <Accordion disabled={disabled}>
      <AccordionSummary expandIcon={<KeyboardArrowRightIcon />}>
        <Typography>{title}</Typography>
        {icon && <IconButton onClick={onIconClick}>{icon}</IconButton>}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

export default AccordionComponent;
