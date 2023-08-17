import * as S from './styles';

export interface InputProps {
	inputSize?: 'small' | 'medium' | 'large';
	placeholder?: string;
	value?: string;
	width?: string | number;
	height?: string | number;
	radius?: string | number;
	padding?: string | number;
	shadow?: boolean;
	border?: string;
	focus?: boolean;
	readOnly?: boolean;
}

export function Input({ placeholder, value, inputSize = 'medium', ...rest }: InputProps) {
	const size = S.inputSizeToSize[inputSize];

	return <S.Input placeholder={placeholder} value={value} size={size} {...rest} />;
}

Input.defaultProps = {
	height: 28,
	shadow: true,
	focus: true,
	readOnly: false,
};
