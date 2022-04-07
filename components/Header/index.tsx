import Image from 'next/image';
import Props from './Header.props';
import useWindowDemantions from '../../hooks/useWidow';
import { MD } from '../../shared/consts/breakpoints';

const Header: React.FC<Props> = (props) => {
	const { width } = useWindowDemantions();

	return (
		<header className='relative pb-[75px]' {...props}>
			<Image
				width={width}
				height={width >= MD ? 426 : 315}
				className='object-cover'
				src='/background.webp'
				alt='Background' />
			<div className='absolute bottom-0 w-full flex justify-center'>
				<Image
					width={150}
					height={150}
					className='object-cover rounded-full'
					src='/me.jpeg'
					alt='avatar' />
			</div>
		</header>
	);
};

export default Header;
