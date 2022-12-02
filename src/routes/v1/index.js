const express = require('express');
const defaultRoute = require('./default.route')

const router = express.Router();

const routes = [
  {
    path: '/ping',
    route: defaultRoute,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;