import { useEffect, useState } from 'react';
import {
  FormHelperText,
  useTheme,
  InputLabel,
  TextField,
  Autocomplete,
  CircularProgress,
} from '@mui/material';
import Icon from 'core/components/icon';

type Option = { id: string | number; title: string };

type SelectProps = {
  name: string;
  showError?: boolean;
  label?: string;
  value?: Option | Option[] | null;
  placeholder?: string;
  handleChange: (value: Option | Option[] | null) => void;
  errorMessage?: string;
  captionMessage?: string;
  size?: 'medium' | 'small';
  multiple?: boolean;
  success?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  options: Option[];
  required?: boolean;
  showIcon?: boolean;
  icon?: string;
};

const Select = ({
  name,
  showError = false,
  label = '',
  value = null,
  placeholder = '',
  handleChange,
  errorMessage = '',
  captionMessage = '',
  size = 'medium',
  multiple = false,
  success = false,
  disabled = false,
  readOnly = false,
  loading = false,
  options = [],
  required = false,
  showIcon = false,
  icon = 'search',
}: SelectProps) => {
  const [currentValue, setCurrentValue] = useState<Option | Option[] | null>(value);
  const theme = useTheme();

  useEffect(() => {
    if (currentValue !== value) {
      setCurrentValue(value);
    }
  }, [value]);

  return (
    <>
      <InputLabel htmlFor={name} sx={{ mb: theme.spacing(1) }}>
        {label}
        {required && <span style={{ color: theme.palette.warning.main }}>*</span>}
      </InputLabel>
      <Autocomplete
        multiple={multiple}
        options={options}
        value={currentValue}
        getOptionLabel={(option) => option.title}
        isOptionEqualToValue={(option, value) => option?.id === value?.id}
        fullWidth
        size={size}
        loading={loading}
        readOnly={readOnly}
        disabled={disabled}
        onError={() => null}
        onChange={(e, value) => {
          handleChange(value);
          setCurrentValue(value);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              startAdornment: showIcon && (
                <>
                  <Icon
                    icon={icon}
                    // customStyle={{ marginLeft: '4px', marginRight: '4px' }}
                  />
                  {params.InputProps.startAdornment}
                </>
              ),
              endAdornment: (
                <>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
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

export default Select;
