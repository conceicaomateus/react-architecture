import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '.';

const meta: Meta<ButtonProps> = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],

	argTypes: {
		variant: {
			defaultValue: 'primary',
			options: ['primary', 'secondary', 'outline'],
			control: {
				type: 'select',
			},
		},
	},
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
	args: {
		variant: 'primary',
	},

	render: (args) => <Button {...args}>Primary Button</Button>,
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
	},

	render: (args) => <Button {...args}>Secondary Button</Button>,
};
export const Outline: Story = {
	args: {
		variant: 'outline',
	},

	render: (args) => <Button {...args}>Outline Button</Button>,
};
