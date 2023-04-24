import type { Meta, StoryObj } from '@storybook/react';
import Icon from 'core/components/icon';
import palette from 'core/theme/palette';
const color = palette().error.main;
const meta: Meta<typeof Icon> = {
  title: 'Icon',
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: 'search',
  },
};

export const CustomColor: Story = {
  args: {
    icon: 'search',
    color: color,
  },
};

export const CustomSize: Story = {
  args: {
    icon: 'search',
    width: 40,
    height: 40,
  },
};

export const ModeLight: Story = {
  args: {
    icon: 'search',
    mode: 'light',
  },
};

export const ModeDark: Story = {
  args: {
    icon: 'search',
    mode: 'dark',
  },
};
