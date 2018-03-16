const Average = require('../utils/average');

/**
 * The Averages model that manages the averages calculations and constructs the final object
 *
 * @constructor
 */
const Averages = function() {};

/**
 * Calculates the averages and returns an array of objects, with each object
 * being an individual sensor and its mean, median and mode(s) averages
 *
 * @param dataArray
 * @returns array
 */
Averages.prototype.calculateAverages = function(dataArray) {
	const averageUtil = new Average();

	const temperatures = {};
	const averages = [];

	// Transform data array into an array of temperatures by id
	dataArray.forEach((sensor) => {
		if(!temperatures[sensor.id]) {
			temperatures[sensor.id] = [];
		}

		// Extract and set the temperature to 2 decimal places as per requirements
		temperatures[sensor.id].push(sensor.temperature);
	});

	// Traverse each sensor object's array of temperatures and obtain the average (mean),
	// median and mode of each
	Object.keys(temperatures).forEach((sensor) => {
		let average = averageUtil.getAverage(temperatures[sensor]);
		let median = averageUtil.getMedian(temperatures[sensor]);
		let mode = averageUtil.getMode(temperatures[sensor]);

		// Push each sensor and it's averages to the averages array
		averages.push({
			id: sensor,
			average: average,
			median: median,
			mode: mode
		});
	});

	// Return the object sorted by the average temperature -- the calculateAverages array can be
	// changed to include a key to sort by, defaulting to the first key
	return this._sortBy(averages, 'average');
};

/**
 * Private function to sort an array by key
 *
 * @param array
 * @param key
 * @returns {*}
 * @private
 */
Averages.prototype._sortBy = function (array, key) {
	return array.sort((a, b) => {
		let val1 = a[key];
		let val2 = b[key];

		return ((val1 < val2) ? -1 : ((val1 > val2) ? 1 : 0))
	});
};


module.exports = Averages;