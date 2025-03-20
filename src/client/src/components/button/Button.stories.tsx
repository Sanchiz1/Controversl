import Button from "./Button";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <div style={{
        padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center',
        color: 'oklch(83.54% 0 264)',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
      }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
    disabled: false,
  },
};

export const SecondaryButton: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    disabled: false,
  },
};

export const DisabledButton: Story = {
  args: {
    label: "Disabled Button",
    variant: "primary",
    disabled: true,
  },
};

export const ButtonWithAction: Story = {
  args: {
    label: "Click Me",
    variant: "primary",
    onClick: () => alert("Button Clicked!"),
    disabled: false,
  },
};
