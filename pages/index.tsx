import Header from '../components/Header';
import Messengers from '../components/Messengers';
import ProjectCard from '../components/ProjectCard';
import Image from 'next/image';
import PROJECTS from '../shared/consts/projects';

import ArrowIcon from '../assets/arrow.svg';
import { useRouter } from 'next/router';

const MainPage = (): JSX.Element => {
	const router = useRouter();

	return (
		<main>
			<Header />
			<h1 className='text-[26px] font-bold text-center mt-3'>
				Кирилл Осинцев
			</h1>
			<p className='text-center font-semibold text-gray mt-[10px]'>
				Middle Front-End разработчик
			</p>
			<Messengers className='sm:w-[400px] mx-auto' />
			<ArrowIcon className='mx-auto mt-14' />
			<section className='grid gap-16 px-4 lg:px-[100px] xl:px-[200px]'>
				<h2 className='mt-11 font-extrabold text-[50px] font-tt-travels'>
					Мои проекты
				</h2>
				{PROJECTS.map((i, num) => (
					<ProjectCard
						key={num}
						imageSrc={i.imageSrc}
						title={i.title}
						tasks={i.tasks}
						link={i.link}
						imagePosition={num % 2 === 0 ? 'left' : 'right'} />
				))}
			</section>
			<Messengers className='sm:w-[400px] mx-auto mt-20 mb-32' />
			<button
				className='mx-auto block w-fit mb-16'
				onClick={() => router.push('https://wooble.space')}
			>
				<Image
					src='/wooble.svg'
					width={151}
					height={46}
					alt='wooble' />
			</button>
		</main>
	);
};

export default MainPage;
