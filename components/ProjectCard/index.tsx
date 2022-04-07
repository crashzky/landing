import Image from 'next/image';
import Link from 'next/link';
import useWindowDemantions from '../../hooks/useWidow';
import Props from './ProjectCard.props';

import ArrowIcon from '../../assets/arrow.svg';
import { MD } from '../../shared/consts/breakpoints';

const ProjectCard: React.FC<Props> = ({ className = '', imageSrc, title, tasks, link, imagePosition = 'left', ...props }) => {
	const { width } = useWindowDemantions();

	return (
		<article
			className={className + ' md:grid grid-cols-2 md:gap-16'}
			{...props}
		>
			<Image
				width={width > MD ? 600 : width - 32}
				height={width > MD ? 400 : 229}
				alt='project'
				className='object-cover rounded-2xl md:rounded-none'
				src={imageSrc} />
			<div className={'grid gap-5 mt-3 h-min md:mt-none self-center ' + (imagePosition === 'right' ? 'row-[1]' : '')}>
				<h3 className='font-tt-travels font-extrabold text-2xl'>
					{title}
				</h3>
				<p className='text-gray font-bold text-md'>
					{tasks.join(' • ')}
				</p>
				{link && (
					<Link href={link}>
						<a className='block font-bold text-md text-purple'>
							Смотреть проект
							<ArrowIcon className='inline-block ml-[15px] -rotate-90' />
						</a>
					</Link>
				)}
			</div>
		</article>
	);
};

export default ProjectCard;
