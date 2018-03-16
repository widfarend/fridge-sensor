/**
 * Provides Average, Median and Mode for arrays of numeric values
 *
 * @constructor
 */
const Average = function() {};

/**
 * Returns the average of an array of numeric values
 * Return a single value of all the values added together with a reduce
 * and divide that by the number of values in the array (average)
 *
 * e.g. [ 1, 2, 3, 4 ] would return (1 + 2 + 3 + 4) / 4 === 2.5
 *
 * @param valueArray
 * @returns {number}
 */
Average.prototype.getAverage = function(valueArray = []) {
    const average =(valueArray.reduce(( curr, next ) => curr + next) / valueArray.length);

    // Set to 2 decimal places
    return Math.round(average * 100)/100;
};

/**
 * Returns the median of an array of numeric values
 * Sorts the array and returns the middle value (median)
 * If the array is even it returns the mean average of the
 * two middle numbers
 *
 * e.g. [ 1, 5, 7, 9, 12 ] would return 7
 *
 * @param valueArray
 * @returns {number}
 */
Average.prototype.getMedian = function(valueArray = []) {
    // Sort the numbers correctly
    const sortedArray = valueArray.sort(this._sortNumber);

    let median;

    if(sortedArray.length % 2 === 0) {
        const num1 = sortedArray[(sortedArray.length / 2) - 1];
        const num2 = sortedArray[sortedArray.length / 2];

        median = (num1 + num2) / 2;
    } else {
        const idx = (sortedArray.length - 1) / 2;
        median = sortedArray[idx];
    }

    // Set to 2 decimal places
    return Math.round(median * 100)/100;
};

/**
 * Returns the mode(s) (most frequent repeating numbers) of the values array
 * @param valueArray
 * @returns {Array}
 */
Average.prototype.getMode = function(valueArray = []) {
    const modeArray = [];
    let count = {};
    let maxCount = 0;

    // First work our way through the supplied array and create a new object
    // containing the value as a key and the current count for that value.
    // We then perform a check to see if this count is currently the highest count and, if it is
    // set maxCount to the new highest count.
    valueArray.forEach((item) => {
        if(!count[item]) {
            count[item] = 1;
        } else {
            count[item] = count[item] + 1;
        }

        if(maxCount < count[item]) {
            maxCount = count[item];
        }
    });

    // With our new count object, create an array of all values that
    // match the highest count
    Object.keys(count).forEach((key) => {
       if(count[key] === maxCount) {
           // Set to 2 decimal places and convert to number
           modeArray.push(Math.round(key * 100)/100);
       }
    });

    // Give back a sorted array of values
    return modeArray.sort();
};

/**
 * Private function to sort numbers correctly
 * @param a
 * @param b
 * @private
 */
Average.prototype._sortNumber = function(a, b) {
    return a-b;
};

module.exports = Average;