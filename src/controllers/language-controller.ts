import Fs from 'fs-extra';
import path from 'node:path';
import { FilestackService } from 'src/services/filestack-service';

class LanguageController {
	static async index(req, res, next) {
		try {
			const files = await Fs.promises.readdir(path.join(path.resolve(), 'public', 'languages'));
			console.log('files: ', files);
			const uploads = await Promise.all(files.map(async file => FilestackService.upload(file)));
			res.json({ status: 200, data: uploads });
		} catch (e) {
			next(e);
		}
	}
}

export { LanguageController };
