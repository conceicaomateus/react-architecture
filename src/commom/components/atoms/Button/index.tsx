import * as S from './styles';

export interface ButtonProps {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'outline';
}

export function Button({ children, variant = 'primary' }: ButtonProps) {
	const { bgColor, borderColor, color, hover } = S.variantToColor[variant];

	return (
		<S.Container
			bgColor={bgColor}
			color={color}
			borderColor={borderColor}
			hoverBgColor={hover.bgColor}
			hoverColor={hover.color}
		>
			{children}
		</S.Container>
	);
}
