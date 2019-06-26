
export async function addToCart(id) {
	await fetch(`https://nursery.misfitsmarket.com/api/test/v1/${id}`, {
		method: "post",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-Customer-Token': 721028102
		},
		body: JSON.stringify({
			id
		})
	})
		.then((response) => {
			console.log(response);
		})
		.then((responseJson) => { console.log(responseJson); })
		.catch((error) => { console.error(error); })
}
