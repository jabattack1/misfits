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

	addToCart(){
		console.log(this.props.item.id);
		var item = this.props.item;
	
		fetch(`https://nursery.misfitsmarket.com/api/test/v1/`+this.props.item.id, {
			method: "post",
			  headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json',
			    'X-Customer-Token':721028102
			  },
		  	body: JSON.stringify({
		    item
			})
		})
		.then((response) => { 
		   console.log(response);
		})
		.then((responseJson) => { console.log(responseJson); })
		.catch((error) => {console.error(error); })

	}

}


export default Items;






