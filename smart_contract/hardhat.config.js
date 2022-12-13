require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.9',
	networks: {
		goerli: {
			url: 'https://eth-goerli.g.alchemy.com/v2/zXirjd7i0EL-_f6vitIRn19O3RqhwuCp',
			accounts: [
				'1e55af178d6f52902defa83b7058a4fbad13728da09a204f2f41640d0ddfa09b',
			],
		},
	},
};
