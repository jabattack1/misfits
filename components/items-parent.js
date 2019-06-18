
import Link from 'next/link';
import Items from '../components/items';


class ItemsParent extends React.Component{

	constructor(props) {

		super(props);

    }

	state = {
		
	}

	render(){

		return(
			<div>
				<img className='misfitsLogo' src='https://cdn.shopify.com/s/files/1/0021/1750/1026/t/10/assets/misfits-market-header-logo.svg?515772' title='misfits market' />
				<ul className='table'>
					{this.props.data.items.map((item, i) => <Items key={i} i={i+1} item={item} />)}
				</ul>
				<Link id='back' href={`/`}>BACK</Link>
			</div>
		)
	}

}

export default ItemsParent;

