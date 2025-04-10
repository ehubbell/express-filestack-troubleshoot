require('dotenv').config();
const path = require('node:path');
const filestack = require('filestack-js');
const options = {};
const client = filestack.init(process.env.FILESTACK_API_KEY, options);

client.on('upload.error', error => {
	console.log(error);
});

const file = path.join('public', 'languages', 'kotlin.webp');
const token = {};

const onRetry = obj => {
	console.log(`Retrying ${obj.location} for ${obj.filename}. Attempt ${obj.attempt} of 10.`);
};

try {
	client.upload(file, { onRetry }, { filename: 'foobar.jpg' }, token).then(res => console.log(res));
} catch (error) {
	console.error('error: ', error);
}
