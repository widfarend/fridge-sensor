require('dotenv').config();

const Koa = require('koa');
const averagesRoutes = require('./routes/averages.routes');

const app = new Koa();
const PORT = process.env.PORT || 8081;

app.use(averagesRoutes.routes());

const server = app.listen(PORT).on('error', (err) => {
    console.log('Error starting server: ', err);
});

module.exports = server;