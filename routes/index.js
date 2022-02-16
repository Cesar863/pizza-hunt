const router = require('express').Router();
// Import all of the api routes from /api/inde 
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

// add prefix of '/api to all of the api routes imported from the pi directory
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
