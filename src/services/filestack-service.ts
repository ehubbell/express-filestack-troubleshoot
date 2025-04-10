import * as Filestack from 'filestack-js';
import Superagent from 'superagent';

class FilestackService {
	// Computes
	static get client() {
		const client = Filestack.init(process.env.FILESTACK_API_KEY as string);
		client.on('upload.error', error => console.error('client error: ', error));
		return client;
	}

	// Methods
	static async upload(file) {
		try {
			const upload = await this.client.upload(file);
			console.log('filestack upload: ', { file, url: upload.url });
			return upload.url;
		} catch (e) {
			console.error('upload error: ', e);
		}
	}

	static async uploadUrl(url) {
		const response = await Superagent.get(url).buffer(true).parse(Superagent.parse.image);
		const buffer = Buffer.from(response.body);
		const upload = await this.client.upload(buffer);
		return upload.url;
	}
}

export { FilestackService };

// Docs
// https://github.com/filestack/filestack-js
