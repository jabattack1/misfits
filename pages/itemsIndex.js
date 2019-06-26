//Switches between unfetch & node-fetch for client & server.
import fetch from 'isomorphic-unfetch';
//centralized css for non-components
import '../src/css/style.css';
//React components
import Layout from '../src/components/layout';
import ItemsParent from '../src/components/itemsParent';

const ItemsIndex = (props) => (
	<Layout>
		<div>
			<ItemsParent {...props.misfits} />
		</div>
	</Layout>
);

ItemsIndex.getInitialProps = async function () {
	const result = await fetch('https://nursery.misfitsmarket.com/api/test/v1');
	const data = await result.json();

	return {
		misfits: data
	};
}

export default ItemsIndex;