import { useEffect, useState } from 'react';
import {
  FormHelperText,
  useTheme,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Box,
  ToggleButtonGroup as MUIToggleButtonGroup,
  ToggleButton as MUIToggleButton,
} from '@mui/material';
import { styled } from '@mui/system';
import Icon from 'core/components/icon';

export interface Props {
  name: string;
  showError?: boolean;
  label?: string;
  value?: string;
  placeholder?: string;
  type?: 'text' | 'number';
  handleChange?: (value: string) => void;
  onClose?: () => void;
  onSubmit?: (value: string) => void;
  errorMessage?: string;
  captionMessage?: string;
  size?: 'small' | 'medium';
  success?: boolean;
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  showIcon?: boolean;
  icon?: string;
  iconPosition?: 'start' | 'end';
  actionButton?: boolean;
  required?: boolean;
}

const ToggleButtonGroup = styled(MUIToggleButtonGroup)(({ theme }) => ({
  position: 'absolute',
  width: 'max-content',
  boxShadow: `0px 4px 8px ${theme.palette.commonColor.shadow}`,
  borderRadius: theme.spacing(1),
  bottom: theme.spacing(-3.5),
  right: theme.spacing(1),
  zIndex: 1,
  backgroundColor: theme.palette.commonColor.white,
}));

const ToggleButton = styled(MUIToggleButton)(({ theme }) => ({
  border: `1px solid ${theme.palette.commonColor.light}`,
  borderRadius: theme.spacing(1),
}));

const Input = ({
  name,
  showError = false,
  label = '',
  value = '',
  placeholder = '',
  type = 'text',
  handleChange,
  onClose,
  onSubmit,
  errorMessage = '',
  captionMessage = '',
  size = 'medium',
  success = false,
  multiline = false,
  rows = 1,
  disabled = false,
  readOnly = false,
  autoFocus = false,
  showIcon = false,
  icon = 'search',
  iconPosition = 'start',
  actionButton = false,
  required = false,
}: Props) => {
  const [currentValue, setCurrentValue] = useState<string>(value);
  const theme = useTheme();

  useEffect(() => {
    if (currentValue !== value) {
      setCurrentValue(value);
    }
  }, [value]);

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        {label && (
          <InputLabel htmlFor={name} sx={{ mb: theme.spacing(1) }}>
            {label}
            {required && <span style={{ color: theme.palette.warning.main }}>*</span>}
          </InputLabel>
        )}
        <OutlinedInput
          id="firstname-login"
          value={currentValue}
          name={name}
          onChange={(e) => {
            setCurrentValue(e.target.value);
            handleChange?.(e.target.value);
          }}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: success ? theme.palette.success.main : theme.palette.secondary.lighter,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: success ? theme.palette.success.main : theme.palette.secondary.light,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: success ? theme.palette.success.main : theme.palette.primary.main,
            },
          }}
          placeholder={placeholder}
          fullWidth
          type={type}
          size={size}
          autoFocus={autoFocus}
          rows={rows}
          multiline={multiline}
          disabled={disabled}
          readOnly={readOnly}
          error={showError && errorMessage.length > 0}
          startAdornment={
            showIcon && iconPosition === 'start' ? (
              <InputAdornment position={'start'} sx={{ mr: theme.spacing(0) }}>
                <Icon icon={icon} width={20} />
              </InputAdornment>
            ) : null
          }
          endAdornment={
            showIcon && iconPosition === 'end' ? (
              <InputAdornment position={'end'}>
                <Icon icon={icon} width={20} />
              </InputAdornment>
            ) : null
          }
        />
        {actionButton && (
          <ToggleButtonGroup exclusive size="small">
            <ToggleButton
              value="list"
              aria-label="list"
              onClick={() => {
                onClose?.();
              }}
            >
              <Icon icon="close" />
            </ToggleButton>
            <ToggleButton
              value="module"
              aria-label="module"
              onClick={() => {
                onSubmit?.(currentValue);
              }}
            >
              <Icon icon="tick" />
            </ToggleButton>
          </ToggleButtonGroup>
        )}
      </Box>
      {showError && errorMessage.length > 0 && (
        <FormHelperText sx={{ fontWeight: 500 }} error id={`helper-text-${name}`}>
          {errorMessage}
        </FormHelperText>
      )}
      {captionMessage?.length > 0 && (
        <FormHelperText
          sx={{
            fontWeight: 500,
            color: success ? theme.palette.success.main : theme.palette.secondary.light,
          }}
          id={`helper-text-${name}`}
        >
          {captionMessage}
        </FormHelperText>
      )}
    </>
  );
};

export default Input;
