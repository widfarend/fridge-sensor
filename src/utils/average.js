/**
 * Provides Average, Median and Mode for arrays of numeric values
 *
 * @constructor
 */
const Average = function() {
    /**
     * Returns the average of an array of numeric values
     * @param valueArray
     * @returns {number}
     */
    this.getAverage = function(valueArray = []) {
        return (valueArray.reduce(( curr, next ) => curr + next) / valueArray.length);
    };

    /**
     * Returns the median of an array of numeric values
     * @param valueArray
     * @returns {T}
     */
    this.getMedian = function(valueArray = []) {
        let sortedArray = valueArray.sort();
        return sortedArray[Math.floor(sortedArray.length / 2)];
    };

    /**
     * Returns the mode(s) (frequent repeating numbers) of
     * @param valueArray
     * @returns {Array}
     */
    this.getMode = function(valueArray = []) {
        return [];
    }
};

module.exports = Average;