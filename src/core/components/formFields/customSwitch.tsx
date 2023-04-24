import Switch from '@mui/material/Switch';
import { styled } from '@mui/system';

const MUISwitch = styled(Switch, {
  shouldForwardProp: (prop) => prop !== 'focusVisibleClassName',
})(({ theme }) => ({
  width: 30,
  height: 17,
  padding: 0,
  margin: 9,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    left: 1,
    top: 1,
    '&.Mui-checked': {
      left: -3,
      top: 1,
      transform: 'translateX(16px)',
      color: theme.palette.commonColor.white,
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.success.main,
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: theme.palette.success.main,
      border: `6px solid ${theme.palette.commonColor.white}`,
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 12,
    height: 12,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.secondary.light,
    opacity: 1,
    // transition: theme.transitions.create(['background-color'], {
    //   duration: 500,
    // }),
  },
}));

interface CustomSwitchProps {
  [key: string]: any;
}

const CustomSwitch: React.FC<CustomSwitchProps> = (props) => {
  return <MUISwitch disableRipple color="default" {...props} />;
};

export default CustomSwitch;
