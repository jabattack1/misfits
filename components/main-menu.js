import Link from 'next/link';

class MainMenu extends React.Component{

	constructor(props) {

		super(props);

		if(props.msg === 'Success'){
	       	this.state = {
	       		status:'available'
	       	}
    	}
    	else{
    		this.state = {
    			status:'sold out'
    		}
    	}
    }

	state = {
		
	}

	render(){
		var items = '';

		if(this.state.status === 'available'){
			items = (
				<div>
					<img className='misfitsLogo' src='https://cdn.shopify.com/s/files/1/0021/1750/1026/t/10/assets/misfits-market-header-logo.svg?515772' title='misfits market' />
					<Link href={`/items-index`}>
						<img className='fruit' src='https://cdn.shopify.com/s/files/1/0021/1750/1026/t/10/assets/blemishes.svg?515772g'/>
					</Link>
				</div>
			)
		}
		else{
			items = (
				<div>
					<img className='misfitsLogo' src='https://cdn.shopify.com/s/files/1/0021/1750/1026/t/10/assets/misfits-market-header-logo.svg?515772' title='misfits market' />
					<img className='fruit' src='https://i.imgur.com/5cSXs3A.png' />
				</div>
			)	
		}	

		return(
			<div>
				{items}
			</div>
		)
	}




}

export default MainMenu;