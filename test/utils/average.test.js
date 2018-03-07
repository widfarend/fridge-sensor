const Chai = require('chai');
const should = Chai.should();

const Average = require("../../src/utils/average");

describe("Utils: Average", () => {
    beforeEach(() => {
        average = new Average();
    });

    it("should return the average of an array of values", () => {
        let averageArray = [ 1, 2, 3, 4 ];
        let expected = 2.5;

        let result = average.getAverage(averageArray);

        result.should.eql(expected);
    });

    it("should return the median of an array of values", () => {
        let medianArray = [ 1, 5, 7, 9, 12 ];
        let expected = 7;

        let result = average.getMedian(medianArray);

        result.should.eql(expected);
    });

    it('should return a mode of an array of values', () => {
        let modeArray = [ 1, 2, 3, 1, 2, 1, 2, 3 ];
        let expected = [1, 2];

        let result = average.getMode(modeArray);

        result.should.eql(expected);
    });
});