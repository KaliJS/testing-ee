// AccordionComponent.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import AccordionComponent from 'core/components/accordions/Accordion';

const meta: Meta<typeof AccordionComponent> = {
  title: 'Accordion',
  component: AccordionComponent,
};

export default meta;

type Story = StoryObj<typeof AccordionComponent>;

export const Default: Story = {
  args: {
    title: 'Default Accordion',
    children: 'Accordion Content',
  },
};

export const WithIcon: Story = {
  args: {
    title: 'Accordion with Icon',
    icon: <AddIcon />,
    children: 'Accordion Content',
    onIconClick: () => alert('Icon clicked!'),
  },
};

export const WithLongTitle: Story = {
  args: {
    title: 'Accordion with Long Title that Spans Across Multiple Lines and Takes Up a Lot of Space',
    children: 'Accordion Content',
  },
};

export const WithNoContent: Story = {
  args: {
    title: 'Accordion with No Content',
  },
};

export const WithDisabledAccordion: Story = {
  args: {
    title: 'Disabled Accordion',
    children: 'Accordion Content',
    disabled: true,
  },
};
