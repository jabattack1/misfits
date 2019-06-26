import '../src/css/style.css';

import items from '../src/api/index'

import Layout from '../src/components/layout';
import ItemsParent from '../src/components/items-parent';



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