
const axios = require('axios').default;
const apiUrl = require('./index');

module.exports = (rota, body = {}) => axios.delete(`${apiUrl}${rota}`, body);
