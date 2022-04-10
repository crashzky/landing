import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { YMInitializer } from 'react-yandex-metrika';

class CustomDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html lang='ru'>
				<Head />
				<body>
					<YMInitializer accounts={[88231122]} options={{ webvisor: true }} />
					<Main />
					<NextScript />
				</body>
			</Html>	
		);
	}
}

export default CustomDocument;
