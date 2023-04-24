import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/system';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: theme.spacing(0.5),
  width: 16,
  height: 16,
  backgroundColor: theme.palette.commonColor.white,
  border: `1px solid ${theme.palette.secondary.main}`,
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
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
  backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 14,
    height: 15,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  'input:hover ~ &': {
    boxShadow: `0 0 0 2px ${theme.palette.primary.light}`,
    backgroundColor: theme.palette.primary.main,
  },
}));

interface CustomCheckboxProps {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'default';
  checkek?: boolean;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = (props) => {
  return (
    <Checkbox
      disableRipple
      color={props.color || 'primary'}
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
};

export default CustomCheckbox;
