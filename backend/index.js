const WooCommerceAPI = require('@woocommerce/woocommerce-rest-api').default;

const WooCommerce = new WooCommerceAPI({
	url: 'https://humibadev.xyz/',
	consumerKey: 'ck_a7f775059370afe993ff5d890f27906ec2e7714a',
	consumerSecret: 'cs_c20a7009024ff51d9c359faa0e5150210267ec3c',
	wpAPI: true,
	version: 'wc/v1',
});

WooCommerce.get('orders')
	.then((response) => {
		const metaMaskPayment = response.data.filter((item) => {
			return item.payment_method_title === 'MetaMask Pay';
		});
		console.log(metaMaskPayment);
	})
	.catch((error) => {
		console.log(error.message);
	});
