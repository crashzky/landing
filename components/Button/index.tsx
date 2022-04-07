import Image from 'next/image';
import Props from './Button.props';
import { useRouter } from 'next/router';

const Button: React.FC<Props> = ({ className = '', icon, title, backgroundColor, titleColor, link, onClick, ...props }) => {
	const router = useRouter();

	return (
		<button
			className={className + ' w-full h-[45px] px-12 flex items-center rounded-2xl'}
			style={{
				backgroundColor: backgroundColor,
			}}
			onClick={(e) => {
				if(onClick)
					onClick(e);
				if (link)
					router.push(link);
			}}
			{...props}
		>
			<Image
				src={icon}
				width={24}
				height={24}
				alt='icon' />
			{title && (
				<p
					className='font-bold ml-5'
					style={{
						color: titleColor,
					}}
				>
					{title}
				</p>
			)}
		</button>
	);
};

export default Button;
