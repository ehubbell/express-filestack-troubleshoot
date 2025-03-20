import { AppController, LanguageController } from 'src/controllers';

const Router = app => {
	// Transforms
	app.set('trust proxy', 1);
	app.set('json replacer', null);
	app.set('json spaces', 2);

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
	app.get('/', AppController.index);
	app.get('/languages', LanguageController.index);
	app.get('/languages/upload', LanguageController.upload);
	app.get('/languages/batch-upload', LanguageController.batchUpload);
	app.get('/languages/batch-upload-slow', LanguageController.batchUploadSlow);

	// Errors
	app.use(function (error, req, res, next) {
		console.error(error);
		res.status(error.code || 500).send({ errors: [error] });
	});
};

export default Router;
