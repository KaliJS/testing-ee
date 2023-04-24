import type { Meta, StoryObj } from '@storybook/react';
import CustomDatePicker from 'core/components/formFields/datePicker';

const meta: Meta<typeof CustomDatePicker> = {
  title: 'CustomDatePicker',
  component: CustomDatePicker,
};

export default meta;

type Story = StoryObj<typeof CustomDatePicker>;

export const Default: Story = {
  args: {
    label: 'Select Date',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Date Picker',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read Only Date Picker',
    readOnly: true,
  },
};

export const MinMaxDate: Story = {
  args: {
    label: 'Select Date',
    minDate: new Date('2022-01-01'),
    maxDate: new Date('2022-12-31'),
  },
};

export const SelectsRange: Story = {
  args: {
    label: 'Select Date Range',
    selectsRange: true,
  },
};

export const Clearable: Story = {
  args: {
    label: 'Clearable Date Picker',
    isClearable: true,
  },
};

export const CustomStartDate: Story = {
  args: {
    label: 'Date Picker with Custom Start Date',
    value: new Date('2022-06-01'),
  },
};

export const CustomRange: Story = {
  args: {
    label: 'Date Picker with Custom Range',
    selectsRange: true,
    startDate: new Date('2022-06-01'),
    endDate: new Date('2022-06-15'),
  },
};
