import { css, styled } from 'styled-components';
import { AppSizes } from '../../../styles/global';

export const inputSizeToSize = {
	small: AppSizes.small,
	medium: AppSizes.medium,
	large: AppSizes.large,
};

interface InputProps {
	size: string;
	width?: string | number;
	height?: string | number;
	radius?: string | number;
	padding?: string | number;
	shadow?: boolean;
	border?: string;
	focus?: boolean;
	readOnly?: boolean;
}

const focus = css<InputProps>`
	transition: all 0.5s;
	box-shadow: ${({ shadow, focus }) => (shadow && focus ? '0px 0px 1px #93a1bb, 0px 0px 0px 1px #93a1bb' : 'none')};
`;

export const Input = styled.input<InputProps>`
	width: ${(props) => {
		if (props.width) return `${props.width}px`;
		return props.size;
	}};

	height: ${(props) => (props.height ? `${props.height}px` : '100%')};

	padding: ${({ padding }) => {
		if (padding) return typeof padding === 'string' ? padding : `${padding}px`;
	}};

	border-radius: ${({ radius }) => {
		if (radius) return typeof radius === 'string' ? radius : `${radius}px`;
	}};

	border: ${(props) => props.border};

	box-shadow: ${({ shadow }) => (shadow ? '0px 1px 1px #c2cad8, 0px 0px 0px 1px #c2cad8' : 'none')};

	font-size: 12px;
	color: #555;

	&:focus {
		${({ readOnly }) => !readOnly && focus}
	}

	&:read-only {
		background-color: #f5f5f5;
	}

	&::placeholder {
		font-size: 12px;
	}
`;
