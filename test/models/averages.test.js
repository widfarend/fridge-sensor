// Configure the environment
const Averages = require('../../src/models/averages');

const FridgeData = require('../files/fridge.data.json');
const FridgeDataAverages = require('../files/fridge-averages.data.json');

// Configure the test library
const chai = require('chai');
const should = chai.should();

describe('models: averages', () => {
	describe(`Calculate Averages`, () => {
		it('should return a json object containing the an id and average, median and mode temperatures and correct data', async () => {
			const averages = new Averages();
			const res = await averages.calculateAverages(FridgeData);
			res.should.be.an('array');
			res.forEach((result) => {
				result.should.include.keys('id', 'average', 'median', 'mode');

			});
			res.should.deep.equal(FridgeDataAverages);
		})
	})
});