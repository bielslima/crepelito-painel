
const axios = require('axios').default;
const apiUrl = require('./index');

module.exports = rota => axios.get(`${apiUrl}${rota}`);
