// Configure the environment
const DatabaseConnect = require('../../src/db/connect');

// Configure the test library
const chai = require('chai');
const should = chai.should();

describe('db: connect', () => {
    describe(`Find: Get Data`, () => {
        it('should return a json object containing the an id and average, median and mode temperatures', async () => {
            const db = new DatabaseConnect();
            const res = await db.find();
			res.should.be.an('object');
            res.should.include.keys('id', 'average', 'median', 'mode');
        })
    })
});