require('dotenv').config();

const Koa = require('koa');
const averagesRoutes = require('./routes/averages.routes');

// Get the port/host from the environment variables or use the defaults here
const app = new Koa();
const PORT = process.env.PORT || 9001;
const HOST = process.env.HOST || 'localhost';

app.use(averagesRoutes.routes());

// Start listening
const server = app.listen(PORT, HOST, appStarted).on('error', (err) => {
    console.log('Error starting server: ', err);
});

/**
 * Function outputs the protocol, address and port so we know it has started
 */
function appStarted() {
    const { address, port } = this.address();
    const protocol = this.addContext ? 'https' : 'http';
    console.log(`Listening on ${protocol}://${address}:${port}...`)
}

module.exports = server;