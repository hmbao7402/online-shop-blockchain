const router = require('express').Router();

router.post('/:id', async (req, res) => {
	console.log(req.body);
});

module.exports = router;
