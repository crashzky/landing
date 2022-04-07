const PROJECTS: IProject[] = [
	{
		imageSrc: '/projects/fly2go.png',
		title: 'Сервис для туроператора “Fly2Go”',
		tasks: ['Front-End', 'SEO-оптимизация'],
		link: 'https://fly2go.ru',	
	},
	{
		imageSrc: '/projects/skillactive.png',
		title: 'Сервис поиска секций и кружков - “Skillactive”',
		tasks: ['Front-End', 'SEO-оптимизация', 'DevOps'],	
		link: 'https://skillactive.ru',	
	},
	{
		imageSrc: '/projects/invoke.png',
		title: 'Образовательная платформа - “invoke.education”',
		tasks: ['Front-End', 'SEO-оптимизация', 'Поддержка'],	
		link: 'https://invoke.one',	
	},
];

interface IProject {
	imageSrc: string;
	title: string;
	tasks: string[];
	link?: string;
}

export default PROJECTS;
