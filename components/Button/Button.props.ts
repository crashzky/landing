import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: string;
	title?: string;
	backgroundColor: string;
	titleColor?: string;
	link?: string;
}

export default Props;
