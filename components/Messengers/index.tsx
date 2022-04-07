import { GITHUB, INSTAGRAM, LINKEDIN, TELEGRAM, VK } from '../../shared/consts/links';
import Button from '../Button';
import Props from './Messengers.props';

const Messengers: React.FC<Props> = ({ className='', ...props }) => {
	return (
		<nav className={className + ' grid gap-4 px-4 mt-5'} {...props}>
			<div className='grid grid-cols-2 gap-1'>
				<Button
					className='justify-center'
					icon='/icons/tg.svg'
					link={TELEGRAM}
					backgroundColor='#51A8E5' />
				<Button
					className='justify-center'
					icon='/icons/vk.svg'
					link={VK}
					backgroundColor='#2C7AF6' />
			</div>
			<Button
				icon='/icons/github.svg'
				title='GitHub'
				titleColor='#ffffff'
				link={GITHUB}
				backgroundColor='#000000' />
			<Button
				icon='/icons/instagram.svg'
				title='Instagram'
				titleColor='#DA4088'
				link={INSTAGRAM}
				backgroundColor='#F7F7F7' />
			<Button
				icon='/icons/linkedin.svg'
				title='LinkedIn'
				titleColor='#ffffff'
				link={LINKEDIN}
				backgroundColor='#5485C9' />
		</nav>
	);
};

export default Messengers;
