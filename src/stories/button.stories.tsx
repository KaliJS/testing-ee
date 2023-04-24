// Button.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import React from 'react';
import { ButtonComponent } from '../core/components/buttons/button';

const meta: Meta<typeof ButtonComponent> = {
  title: 'Button',
  component: ButtonComponent,
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const Text: Story = {
  args: {
    label: 'Text Button',
    variants: 'text',
  },
};

export const Contained: Story = {
  args: {
    label: 'Contained Button',
    variants: 'contained',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    variants: 'outlined',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium Button',
    size: 'medium',
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading Button',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

export const LoadingIndicator: Story = {
  args: {
    label: 'Button',
    loading: true,
    loadingIndicator: 'Loading...',
  },
};

export const StartIcon: Story = {
  args: {
    label: 'Button',
    startIcon: <AddIcon />,
  },
};

export const EndIcon: Story = {
  args: {
    label: 'Button',
    endIcon: <ClearIcon />,
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    color: 'secondary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Button',
    color: 'success',
  },
};

export const Error: Story = {
  args: {
    label: 'Error Button',
    color: 'error',
  },
};

export const Info: Story = {
  args: {
    label: 'Info Button',
    color: 'info',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Button',
    color: 'warning',
  },
};
