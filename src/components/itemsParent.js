//next-routes helper 
import Link from 'next/link';
//Visual primitives for the component age
import styled from 'styled-components';
//React components
import Items from '../components/items';

const Image = styled.img`
	width:100%
`
const ItemUl = styled.ul`
	list-style-type: none;
	width:250px;
	overflow: hidden;
	display:block;
	margin:0 auto;
	padding:1em;
`

const AnchorTag = styled.a`
	text-decoration: none;
	color:black;
	margin:0 auto;
	display:block;
	text-align:center;
	padding:.5em;	
	&:hover{
		color:#3F3F3F;
		cursor:pointer;
	}
`

class ItemsParent extends React.Component {
	render() {

		return (
			<div>
				<Image className='misfitsLogo' src='https://cdn.shopify.com/s/files/1/0021/1750/1026/t/10/assets/misfits-market-header-logo.svg?515772' title='misfits market' />
				<ItemUl className='table'>
					{this.props.data.items.map((item, i) => <Items key={i} i={i + 1} item={item} />)}
				</ItemUl>
				<Link href={`/`}><AnchorTag>BACK</AnchorTag></Link>
			</div>
		)
	}

}

export default ItemsParent;

