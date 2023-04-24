import type { Meta, StoryObj } from '@storybook/react';
import Input from 'core/components/formFields/input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    name: 'default',
    label: 'Default Input',
    placeholder: 'Type something...',
    type: 'text',
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    name: 'withError',
    showError: true,
    errorMessage: 'This field is required',
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    name: 'success',
    success: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    name: 'disabled',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    ...Default.args,
    name: 'readOnly',
    readOnly: true,
  },
};

export const Multiline: Story = {
  args: {
    ...Default.args,
    name: 'multiline',
    label: 'Multiline Input',
    multiline: true,
    rows: 4,
  },
};

export const ActionButton: Story = {
  args: {
    ...Default.args,
    name: 'actionButton',
    actionButton: true,
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    name: 'required',
    label: 'Required Input',
    required: true,
  },
};

export const ShowIcon: Story = {
  args: {
    ...Default.args,
    name: 'showIcon',
    showIcon: true,
    icon: 'search',
  },
};

export const IconPositionEnd: Story = {
  args: {
    ...ShowIcon.args,
    name: 'iconPositionEnd',
    iconPosition: 'end',
  },
};
