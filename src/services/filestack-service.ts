import * as Filestack from 'filestack-js';
import Superagent from 'superagent';

class FilestackService {
	// Computes
	static get client() {
		return Filestack.init(process.env.FILESTACK_API_KEY);
	}

	// Tasks
	static async upload(filePath) {
		const upload = await this.client.upload(filePath);
		return upload.url;
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
