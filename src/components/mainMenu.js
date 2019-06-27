//next-routes helper 
import Link from 'next/link';
//Visual primitives for the component age
import styled from 'styled-components';

const Image = styled.img`
	width:100%
`

const Fruit = styled.img`
	width:10em; 
	margin:0 auto; 
	display:block; 
	padding:1.7em;	
	&:hover {
		cursor:pointer;
	  }
`

class MainMenu extends React.Component {

	render() {
		
		var items = '';

		if (this.props.msg === 'Success') {
			items = (
				<div>
					<Image className='misfitsLogo' src='https://cdn.shopify.com/s/files/1/0021/1750/1026/t/10/assets/misfits-market-header-logo.svg?515772' title='misfits market' />
					<Link href={`/itemsIndex`}>
						<Fruit src='https://cdn.shopify.com/s/files/1/0021/1750/1026/t/10/assets/blemishes.svg?515772g' />
					</Link>
				</div>
			)
		} else {
			items = (
				<div>
					<Image className='misfitsLogo' src='https://cdn.shopify.com/s/files/1/0021/1750/1026/t/10/assets/misfits-market-header-logo.svg?515772' title='misfits market' />
					<Fruit src='https://i.imgur.com/5cSXs3A.png' />
				</div>
			)
		}

		return (
			<div>
				{items}
			</div>
		)
	}

}

export default MainMenu;