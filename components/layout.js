import Head from 'next/head';
import Link from 'next/link';

const Layout = (props) => (
	<div>
	<Head className='main'>
		<title>Misfits Market</title>
		<link rel='icon' type='image/png' href='https://cdn.shopify.com/s/files/1/0021/1750/1026/t/10/assets/blemishes.svg?515772g' />
	</Head>
		<div className='wrapper'>
			<div className='container'>
				{props.children}
			</div>
		</div>
	</div>
);

export default Layout;
