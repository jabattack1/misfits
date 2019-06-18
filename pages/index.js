import fetch from 'isomorphic-unfetch';
import Layout from '../components/layout';

import '../css/style.css';

import MainMenu from '../components/main-menu';

const Index = (props) => (
	<Layout>
		<div>
			<MainMenu {...props.misfits} />
		</div>
	</Layout>
);

Index.getInitialProps = async function() {
	const result = await fetch('https://nursery.misfitsmarket.com/api/test/v1');
	const data = await result.json();

	return {
		misfits: data
	};
}


export default Index;