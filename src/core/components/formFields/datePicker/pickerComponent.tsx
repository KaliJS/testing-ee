import { forwardRef } from 'react';
import TextField from '@mui/material/TextField';
import format from 'date-fns/format';

interface PickerProps {
  label?: string;
  end: Date | number;
  start: Date | number;
  readOnly?: boolean;
  selectsRange?: boolean;
}

const PickersComponent = forwardRef((props: PickerProps, ref) => {
  const { label, readOnly, selectsRange, start, end } = props;
  let value = null;
  const startDate = start !== null ? format(start, 'MM/dd/yyyy') : '';
  const endDate = selectsRange && end !== null ? format(end, 'MM/dd/yyyy') : '';
  value = startDate + ' ' + (endDate !== '' ? '- ' + endDate : '');
  console.log({ value, startDate, endDate });
  return (
    <TextField
      inputRef={ref}
      {...props}
      label={label || ''}
      value={value || ''}
      {...(readOnly && { inputProps: { readOnly: true } })}
    />
  );
});

PickersComponent.displayName = 'PickersComponent';

export default PickersComponent;
