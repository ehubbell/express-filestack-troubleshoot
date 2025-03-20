class AppController {
	static async index(req, res, next) {
		try {
			res.json({ status: 200, data: 'All systems ready.' });
		} catch (e) {
			next(e);
		}
	}
}

export { AppController };
