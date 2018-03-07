const DatabaseConnect = require('../db/connect');
const Averages = require('../models/averages');

/**
 * Controller for the averages API
 *
 * @param ctx
 * @returns {Promise<void>}
 */
const index = async ctx => {
    try {
        // Connect to the database
        const db = new DatabaseConnect();
        // Get the data from the database
        const res = await db.find();

        // Calculate the averages from the input data and return as json body
        const averages = new Averages();
        ctx.body = averages.calculateAverages(res);
    } catch (error) {
        console.log('Error retrieving averages: ', error);
    }
};

module.exports = { index };