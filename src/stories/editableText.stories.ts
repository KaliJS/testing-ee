import type { Meta, StoryObj } from '@storybook/react';
import EditableText from 'core/components/formFields/editableText';

const meta: Meta<typeof EditableText> = {
  title: 'EditableText',
  component: EditableText,
};

export default meta;

type Story = StoryObj<typeof EditableText>;

export const Default: Story = {
  args: {
    name: 'defaultName',
    label: 'Editable Text',
    value: 'Editable value',
    placeholder: 'Placeholder text',
    type: 'text',
    handleSubmit: (value: string) => {
      console.log('Submitted value:', value);
    },
    errorMessage: 'Field can not be empty',
    size: 'medium',
    multiline: false,
    rows: 1,
    required: false,
    variant: 'body1',
    captionMessage: '',
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    required: true,
  },
};

export const Multiline: Story = {
  args: {
    ...Default.args,
    multiline: true,
    rows: 4,
  },
};

export const NumberType: Story = {
  args: {
    ...Default.args,
    type: 'number',
  },
};
