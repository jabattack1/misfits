import '../css/style.css';

import Layout from '../components/layout';
import ItemsParent from '../components/items-parent';



const ItemsIndex = (props) => (
	<Layout>
		<div>
			<ItemsParent {...props.misfits} />
		</div>
	</Layout>
);


ItemsIndex.getInitialProps = async function() {
	const result1 = await fetch('https://nursery.misfitsmarket.com/api/test/v1');
	const data1 = await result1.json();

	return {
		misfits: data1
	};
}


export default ItemsIndex;