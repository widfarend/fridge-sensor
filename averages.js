const fs = require('fs');
const Averages = require('./src/models/averages');

// Get data file from CLI
let dataPath = process.argv[2];

// Check the file name was added and give a usage example if not
if(!dataPath) {
	let pathArray = process.argv[1].split('/');
	let programName = pathArray[pathArray.length - 1];

	console.log('Missing filename!');
	console.log(`Usage: node ${programName} ./path/to/file`);
	return;
}

// Attempt to process the file and throw an error on failure
try {
	let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
	let averages = new Averages();
	console.log(averages.calculateAverages(data));
} catch (e) {
	console.log('Error processing file: \n\n', e);
}
