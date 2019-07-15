const compress = require('koa-compress');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const etag = require('koa-etag');
const helmet = require('koa-helmet');
const Clapp = require('koa-clapp');
const { logger } = require('../src/utils');

const app = new Clapp({
    appName: 'api',
    version: '1.0.0',
    port: 3000,
    socket: true,
    logging: true,
    errors: true,
    logger,
});

app.use(cors())
    .use(compress())
    .use(etag())
    .use(helmet())
    .use(bodyParser());

app.run();
