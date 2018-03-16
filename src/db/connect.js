require('dotenv').config();
const RootPath = require('../../root-path');
const fs = require('fs');

/**
 * Database connector -- in this case we're just parsing the contents
 * of a JSON file and returning it
 *
 * @constructor
 */
const DatabaseConnect = function() {};

DatabaseConnect.prototype.find = function() {
    let dataPath = `${RootPath}/${process.env.DATA_PATH}`;
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
};

module.exports = DatabaseConnect;