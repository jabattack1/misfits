import Head from 'next/head';
import Link from 'next/link';

const Layout = (props) => (
	<div>
		<Head className='main'>
			<title>Misfits Market</title>
			<link rel='icon' type='image/png' href='https://i.imgur.com/nxMZvrg.png' />
		</Head>
		<div className='wrapper'>
			<div className='container'>
				{props.children}
			</div>
		</div>
	</div>
);

export default Layout;
