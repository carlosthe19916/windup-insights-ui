/*global module*/

const SECTION = 'migrations';
const APP_ID = 'rhamt';
const FRONTEND_PORT = 8002;
const API_PORT = 8080;
const routes = {};

routes[`/beta/${SECTION}/${APP_ID}`] = { host: `https://localhost:${FRONTEND_PORT}` };
routes[`/${SECTION}/${APP_ID}`]      = { host: `https://localhost:${FRONTEND_PORT}` };
routes[`/beta/apps/${APP_ID}`]       = { host: `https://localhost:${FRONTEND_PORT}` };
routes[`/apps/${APP_ID}`]            = { host: `https://localhost:${FRONTEND_PORT}` };

// routes[`/api/${APP_ID}`] = { host: `http://localhost:${API_PORT}` };
routes[`/rhamt-web/api`] = { host: `http://localhost:${API_PORT}` };

module.exports = { routes };
