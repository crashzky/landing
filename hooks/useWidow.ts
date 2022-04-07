import { useEffect, useState } from 'react';

const useWindowDemantions = (): IWindowDemantions => {
	const [windowObj, setWindowObj] = useState<IWindowDemantions>({
		width: 0,
		heigth: 0, 
	});
	
	useEffect(() => {
		setWindowObj({
			width: window.innerWidth,
			heigth: window.innerHeight,
		});
	}, []);

	return windowObj;
};

export default useWindowDemantions;

interface IWindowDemantions {
	width: number;
	heigth: number;
};
