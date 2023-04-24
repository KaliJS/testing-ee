// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { AvatarComponent } from '../core/components/avatars/avatar';
const meta: Meta<typeof AvatarComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'AvatarComponent',
  component: AvatarComponent,
};

export default meta;
type Story = StoryObj<typeof AvatarComponent>;

export const Single: Story = {
  args: {
    type: 'single',
    avatars: [{ letter: 'RK', bgcolor: 'dodgerblue' }],
  },
};
export const Group: Story = {
  args: {
    type: 'group',
    max: 4,
    avatars: [
      { letter: 'RK', bgcolor: 'lightgreen' },
      { letter: 'SK', bgcolor: 'coral' },
      { letter: 'BA', bgcolor: 'dodgerblue' },
    ],
  },
};
