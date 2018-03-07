
// Configure the environment
const server = require('../../src/index');
const PATH = '/api/v1/averages';

// Configure the test library
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('routes: averages', () => {
    describe(`GET ${PATH}`, () => {
        it('should return a json object containing the an id and average, median and mode temperatures', (done) => {
            chai
                .request(server)
                .get(`${PATH}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(200);
                    res.type.should.eql('application/json');
                    res.body.should.be.an('array');
                    res.body.forEach((data) => {
                        data.should.be.an('object');
                        data.should.include.keys('id', 'average', 'median', 'mode');
                    });
                    done();
                })
        })
    })
});