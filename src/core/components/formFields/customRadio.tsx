import Radio from '@mui/material/Radio';
import { styled } from '@mui/system';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 16,
  height: 16,
  backgroundColor: theme.palette.commonColor.white,
  border: `1px solid ${theme.palette.secondary.main}`,
  '.Mui-focusVisible &': {
    outline: `2px auto ${theme.palette.secondary.main}`,
    outlineOffset: 2,
  },
  'input:hover ~ &': {
    boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary.lighter,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    opacity: 0.5,
  },
}));

const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  '&:before': {
    display: 'block',
    // width: 14,
    height: 15,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""',
  },
  'input:hover ~ &': {
    boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary.main,
  },
}));

interface CustomRadioProps {
  [key: string]: any;
}

const CustomRadio: React.FC<CustomRadioProps> = (props) => {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
};

export default CustomRadio;
