import { AppProps } from 'next/app';

import '../styles/globals.css';
import '../styles/font.css';
import '../styles/animation.css';

import 'aos/dist/aos.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default MyApp;
