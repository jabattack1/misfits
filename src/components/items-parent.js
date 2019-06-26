
import Link from 'next/link';
import Items from '../components/items';


class ItemsParent extends React.Component {
	render() {

		return (
			<div>
				<img className='misfitsLogo' src='https://cdn.shopify.com/s/files/1/0021/1750/1026/t/10/assets/misfits-market-header-logo.svg?515772' title='misfits market' />
				<ul className='table'>
					{this.props.data.items.map((item, i) => <Items key={i} i={i + 1} item={item} />)}
				</ul>
				<Link href={`/`}><a>BACK</a></Link>
			</div>
		)
	}

}

export default ItemsParent;

