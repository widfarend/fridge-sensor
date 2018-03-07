const Router = require('koa-router');
const router = new Router();

const averagesController = require('../controllers/averagesController');
const BASE_URL = '/api/v1/averages';

// If the BASE_URL is hit, then run the averagesController
router.get(`${BASE_URL}`, averagesController.index);

module.exports = router;