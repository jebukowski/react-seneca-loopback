import { details } from './plugins';

require('seneca')()
  .use(details)
  .listen({ host: 'localhost', port: 8080 });
