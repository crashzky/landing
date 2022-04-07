import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	imageSrc: string;
	title: string;
	tasks: string[];
	link?: string;
	imagePosition?: 'left' | 'right';
}

export default Props;
