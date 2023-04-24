import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { LoadingButton as MuiLoadingButton } from '@mui/lab';

interface ButtonProps {
  /**
   * Defines the variant of the button
   */
  variants: 'text' | 'contained' | 'outlined';
  /**
   * Defines the size of the button
   */
  size: 'small' | 'medium';
  /**
   * Defines if the button is in loading state
   */
  loading?: boolean;
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean;
  /**
   * Defines the loading indicator text
   */
  loadingIndicator?: string;
  /**
   * Defines the ReactNode for the start icon
   */
  startIcon?: React.ReactNode;
  /**
   * Defines the ReactNode for the end icon
   */
  endIcon?: React.ReactNode;
  /**
   * Defines the color of the button
   */
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button contents
   */
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonComponent = ({
  variants,
  size,
  loading = false,
  disabled = false,
  loadingIndicator,
  startIcon,
  endIcon,
  color,
  onClick,
  label,
}: ButtonProps) => {
  if (loading) {
    return (
      <MuiLoadingButton
        color={color}
        onClick={onClick}
        loading={loading}
        loadingIndicator={loadingIndicator}
      >
        {label}
      </MuiLoadingButton>
    );
  }

  return (
    <MuiButton
      color={color}
      variant={variants}
      size={size}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {label}
    </MuiButton>
  );
};
