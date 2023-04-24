import type { Preview } from '@storybook/react';
import MuiDecorator from './muiDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expended: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [MuiDecorator],
};

export default preview;
