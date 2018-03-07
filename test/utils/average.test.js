const Chai = require('chai');
const should = Chai.should();

const Average = require("../../src/utils/average");

describe("utils: Average", () => {
    beforeEach(() => {
        average = new Average();
    });

    it("should return the average of an array of values", () => {
        let averageArray = [4.12, 3.65, 1.28, 3.71, 9.7 ];
        let expected = 4.491999999999999;

        let result = average.getAverage(averageArray);

        result.should.eql(expected);
    });

    it("should return the median of an array of values", () => {
        let medianArray = [1.28, 3.65, 3.71, 4.12, 9.7 ];
        let expected = 3.71;

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