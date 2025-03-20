import 'dotenv/config';
import App from 'src/app';

App.listen(process.env.PORT, () => console.log('Server running on: ', process.env.SERVER_DOMAIN));
