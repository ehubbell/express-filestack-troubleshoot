import Fs from 'fs-extra';
import httpError from 'http-errors';
import path from 'node:path';
import { FilestackService } from 'src/services/filestack-service';

class LanguageController {
	static async index(req, res, next) {
		try {
			const base = path.join(path.resolve(), 'public', 'languages');
			const files = await Fs.promises.readdir(base);
			console.log('files: ', files);
			res.json({ status: 200, data: files });
		} catch (e) {
			next(e);
		}
	}

	static async upload(req, res, next) {
		try {
			const base = path.join(path.resolve(), 'public', 'languages');
			if (!req.query.fileName) throw httpError(422, 'Please include a valid file name.');
			const upload = await FilestackService.upload(path.join(base, req.query.fileName));
			res.json({ status: 200, data: upload });
		} catch (e) {
			next(e);
		}
	}

	static async batchUpload(req, res, next) {
		try {
			const base = path.join(path.resolve(), 'public', 'languages');
			const files = await Fs.promises.readdir(base);
			console.log('files: ', files);
			const uploads = await Promise.all(files.map(async file => FilestackService.upload(path.join(base, file))));
			res.json({ status: 200, data: uploads });
		} catch (e) {
			next(e);
		}
	}

	static async batchUploadSlow(req, res, next) {
		try {
			const base = path.join(path.resolve(), 'public', 'languages');
			const files = await Fs.promises.readdir(base);
			console.log('files: ', files);
			const uploads: string[] = [];
			for await (const file of files) {
				const upload = await FilestackService.upload(path.join(base, file));
				uploads.push(upload);
			}
			res.json({ status: 200, data: uploads });
		} catch (e) {
			next(e);
		}
	}
}

export { LanguageController };
