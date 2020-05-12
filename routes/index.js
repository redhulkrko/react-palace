const router = require('express').Router();
const path = require('path');

import userRoutes from './user';
import sessionRoutes from './session';
import movieRoutes from './movie';

router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

export { userRoutes, sessionRoutes, movieRoutes};