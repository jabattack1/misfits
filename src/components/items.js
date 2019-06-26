import Customer from '../api/index'

class Items extends React.Component {

	render() {
		return (
			<li>
				<p className='product'>{this.props.item.product}</p>
				<input type='button' value='ADD TO CART' align="right" onClick={this.addItem.bind(this)} />
				<p className='price'>${this.props.item.price}</p>
			</li>
		);
	}

	addItem() {
		var item = this.props.item.id;
		Customer.Customer.addToCart(item);
	}

}


export default Items;






