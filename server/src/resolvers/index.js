const query = require('./query')
const mutation = require('./mutation');

module.exports = {
    ...query,
    ...mutation,
}