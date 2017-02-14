import { details, login } from './plugins';

require('seneca')()
  .use(details)
  .use(login)
  .listen({ host: 'localhost', port: 8080 });
