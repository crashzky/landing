import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class CustomDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	ym() {
		return (
		  '<script src=\'https://mc.yandex.ru/metrika/watch.js\' type=\'text/javascript\'></script>' +
		  '<script type=\'text/javascript\'>' +
				'try {' +
					  'var yaCounterXXXXX = new Ya.Metrika({' +
					  'id:XXXXX,' +
					  'clickmap:true,' +
					  'trackLinks:true,' +
					  'accurateTrackBounce:true,' +
					  'webvisor:true,' +
					  'trackHash:true' +
					'});' +
				'} catch(e) { }' +
		  '</script>'
		);
	};

	render(): JSX.Element {
		return (
			<Html lang='ru'>
				<Head />
				<body>
					<div dangerouslySetInnerHTML={{ __html: this.ym() }} />
					<Main />
					<NextScript />
				</body>
			</Html>	
		);
	}
}

export default CustomDocument;
