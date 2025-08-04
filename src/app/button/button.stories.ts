import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { Button } from './button';

const meta: Meta<Button> = {
  title: 'Button',
  component: Button,
  decorators: [],
  args: {
    click: fn(),
  }
};
export default meta;

type Story = StoryObj<Button>;

export const Basic: Story = {
  args: {
    text: "Click Me",   
  },
};

export const LongText: Story = {
  args: {
    text: "A very very veryyyyyyy long text inside the button",   
  },
};

