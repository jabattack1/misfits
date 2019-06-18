class Items extends React.Component{

	constructor(props) {

	  	super(props);
	  	console.log(props);
	}

	state = {}

	render() {
		return (
			<li>
				<p className='product'>{this.props.item.product}</p>
				<input type='button' value='ADD TO CART' align="right" onClick={this.addToCart.bind(this)}/>
				<p className='price'>${this.props.item.price}</p>
			</li>
		);
	}



}


export default Items;






