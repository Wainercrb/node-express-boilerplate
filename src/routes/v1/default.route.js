const express = require('express');
const defaultController = require('./../../controllers/default.controller')

const router = express.Router();

router.get('/test', defaultController.root);

module.exports = router