# Fridge Sensor

This project was developed for the SafetyCulture Software Engineer Coding Challenge.

## Assumptions

Below are a list of assumptions taken into account while developing the application.

* Both the inputs and outputs of the application are an array of objects.
* The temperature values are always of numeric (decimal) format.
* The average, median and modes are always of numeric (decimal) format.
* The timestamp is not used as part of the processing.
* Based on the expected output, it is assumed the results were sorted by the average.

## Design decisions

* Javascript was selected as the language within to develop due to the short time constraints and the fact that
most recent development experience by the developer is in Javascript.
* The application was developed as backend service that could be scaled as more features are needed.
* Koa was a good choice for the backend as it is a very light weight Javascript backend where plugins can be introduced as
and when needed.
* The application was broken up into the backend server itself to receive a request and respond with an appropriately formatted
JSON object, a database connection module that can be swapped out for a real database if required (currently the service
reads the data from a JSON file)and loosely coupled modules that can be re-used elsewhere. A separate CLI tool was
developed to demonstrate this code re-use.
* A configuration file was included to contain environment variables that can be expanded as necessary. At the moment it is possible
to change the host, port and data file location.

## Running Instructions

Please follow the instructions below to run the development server, run the CLI version and test the application. The instructions assume you have
node and npm installed. If not, please visit the [npm.js](https://www.npmjs.com/get-npm) website to download and install node and npm.

### Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:9001/api/v1/averages`. The app will automatically reload if you change any of the source files.

### Configuration

Changes can be made to the `.env` file to change the port, host and location of the data file.

```
PORT=9001
HOST=localhost
DATA_PATH=data/fridge.data.json
```
### CLI application

Run `node averages ./path/to/data_file` to run the tool on the command-line. The tool will output the results to the console which can be piped to a file.

### Running unit tests

Run `npm run test` to execute the unit tests. Run `npm run test:watch` to have the tests automatically re-run if you change any of the source files.
