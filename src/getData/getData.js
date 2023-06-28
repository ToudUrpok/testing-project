const axios = require('axios');
const mapArrToStrings = require('../mapArrToStrings/mapArrToStrings')

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const idsArr = response.data.map(todo => todo.id);
        return mapArrToStrings(idsArr);
    } catch (e) {

    }
}

module.exports = getData;