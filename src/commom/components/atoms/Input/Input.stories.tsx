import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from '.';

const input: Meta<InputProps> = {
	title: 'Components/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		inputSize: {
			defaultValue: 'medium',
			options: ['small', 'medium', 'large'],
			control: {
				type: 'select',
			},
		},
		shadow: { type: 'boolean' },
		focus: { type: 'boolean' },
		readOnly: { type: 'boolean' },
		width: { type: 'number' },
		border: { type: 'string' },
		height: { type: 'number' },
		padding: { type: 'string' },
		radius: {
			defaultValue: 4,
			type: 'number',
		},
	},
};

export default input;
type Story = StoryObj<InputProps>;

export const Default: Story = {
	args: {
		placeholder: 'Default Input',
		inputSize: 'medium',
		border: '1px solid #ccc',
		height: 28,
		padding: '4px 8px',
		radius: 4,
	},

	render: (args) => <Input {...args} />,
};

export const Small: Story = {
	args: {
		placeholder: 'Small Input',
		inputSize: 'small',
		border: '1px solid #ccc',
		height: 28,
		padding: '4px 8px',
		radius: 4,
	},

	render: (args) => <Input {...args} />,
};

export const Large: Story = {
	args: {
		placeholder: 'Large Input',
		inputSize: 'large',
		border: '1px solid #ccc',
		height: 28,
		padding: '4px 8px',
		radius: 4,
	},

	render: (args) => <Input {...args} />,
};
