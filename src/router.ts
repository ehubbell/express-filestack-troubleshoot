const Router = app => {
	// Middlewares
	app.use((req, res, next) => {
		console.log('req: ', {
			path: req.path,
			method: req.method,
			query: req.query,
			origin: req.headers.origin,
			ipAddress: req.connection.remoteAddress,
			date: new Date().toJSON(),
		});
		next();
	});

	// Routes

	// Status
	app.get('/', async (req, res, next) => {
		const foo: { bar: string } = { bar: '' };
		foo.bar = 'hello';
		res.json({ status: 200, message: 'All systems ready.' });
	});

	app.use(function (error, req, res, next) {
		console.error(error);
		res.status(error.code || 500).send({ errors: [error] });
	});
};

export default Router;
