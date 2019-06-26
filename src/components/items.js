//Visual primitives for the component age
import styled from 'styled-components';
//promise from customer.js
import Customer from '../api/index'

const Button = styled.input`
	display: inline-block;
	float:right;
	margin-top:1.6em;
	padding:.5em;
	border:2px solid black;
	width:8.4em;
	font-size:.1em;
	font-weight:bold;

    &:hover {
		cursor:pointer;
	  }
	&:focus{
		outline:0;
	}
	&:active{
		color:white; background-color:black;
	}
`

const ItemList = styled.li`
	height:3.2em;
	overflow:auto;
`

const Product = styled.p`
	position:relative;
	float:left;
	padding-right:1.5em;
`

const Price = styled.p`
	position:relative;
	float:left;
	padding-right:1.5em;
	float:right;
`

class Items extends React.Component {

	render() {
		return (
			<ItemList>
				<Product >{this.props.item.product}</Product>
				<Button type='button' value='ADD TO CART' align="right" onClick={this.addItem.bind(this)} />
				<Price>${this.props.item.price}</Price>
			</ItemList>
		);
	}

	addItem() {
		var item = this.props.item.id;
		Customer.Customer.addToCart(item);
	}

}

export default Items;






