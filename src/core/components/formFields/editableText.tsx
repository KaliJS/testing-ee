import React, { useState } from 'react';
import { Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import Input from './input';
import { Theme } from '@mui/material/styles';

const CustomTypography = styled(Typography)(({ theme }: { theme: Theme }) => ({
  transitionDuration: '200ms',
  '&:hover': {
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[3],
  },
}));

export interface EditableTextProps {
  name: string;
  label?: string;
  value?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'date';
  handleSubmit?: (value: string) => void;
  errorMessage?: string;
  captionMessage?: string;
  size?: 'small' | 'medium';
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline';
}

const EditableText: React.FC<EditableTextProps> = ({
  name = '',
  label = '',
  value = '',
  placeholder = '',
  type = 'text',
  handleSubmit,
  errorMessage = 'Field can not be empty',
  size = 'medium',
  multiline = false,
  rows = 1,
  required = false,
  variant = 'body1',
  captionMessage = '',
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [enableError, setEnableError] = useState<boolean>(false);
  const theme = useTheme();
  return (
    <>
      {editMode ? (
        <Input
          name={name}
          label={label}
          type={type === 'number' ? 'number' : 'text'}
          placeholder={placeholder}
          value={value}
          size={size}
          rows={rows}
          multiline={multiline}
          required={required}
          captionMessage={captionMessage}
          actionButton
          showError={enableError}
          errorMessage={errorMessage}
          onSubmit={(value: string) => {
            if (required && value?.trim()?.length === 0) {
              setEnableError(true);
            } else {
              handleSubmit?.(value);
            }
          }}
          onClose={() => {
            setEnableError(false);
            setEditMode(false);
          }}
        />
      ) : (
        <CustomTypography theme={theme} variant={variant} onClick={() => setEditMode(true)}>
          {value}
        </CustomTypography>
      )}
    </>
  );
};

export default EditableText;

// TEST CASES:

// Verify that the EditableText component is displayed with the initial value when rendered.
// Verify that the EditableText component switches to edit mode when clicked.
// Verify that the EditableText component switches back to the non-edit mode when the action button is clicked.
// Verify that the error message is displayed when a required field is left empty and submitted.
// Verify that the error message is not displayed when a non-required field is left empty and submitted.
// Verify that the component works correctly with different input types (text, number, and date).
// Verify that the EditableText component displays correctly with different font sizes and variants.
// Verify that the EditableText component renders correctly in a multiline configuration.
// Verify that the correct value is submitted and the handleSubmit function is called when the input is valid.
// Verify that the caption message appears when it's provided.
