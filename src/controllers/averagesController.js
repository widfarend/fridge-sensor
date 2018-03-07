const env = process.env.NODE_ENV || 'test';

const index = async ctx => {
    try {
        ctx.body = {
            id: '',
            average: '',
            median: '',
            mode: ''
        }
    } catch (error) {
        console.log('Error retrieving averages: ', error);
    }
};

module.exports = { index };