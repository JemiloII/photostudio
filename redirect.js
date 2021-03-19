const app = require('connect')();
const redirectSSL = require('redirect-ssl');

app.use(redirectSSL);

app.listen(80);
