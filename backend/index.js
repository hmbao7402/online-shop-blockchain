const express = require('express');
const app = express();
const router = require('./routers');

app.use('/api/woo/order', router);

app.listen(5000, () => {
	console.log('listening on port 5000');
});
