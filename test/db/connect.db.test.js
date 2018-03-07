// Configure the environment
const DatabaseConnect = require('../../src/db/connect');

// Configure the test library
const chai = require('chai');
const should = chai.should();

describe('db: connect', () => {
    describe('Find: Get Data', () => {
        it('should return a json object containing the an id and average, median and mode temperatures', async () => {
            const db = new DatabaseConnect();
            const res = await db.find();
			res.should.be.an('array');
            res.forEach((data) => {
                data.should.be.an('object');
                data.should.include.keys('id', 'timestamp', 'temperature',);
            });
        })
    })
});